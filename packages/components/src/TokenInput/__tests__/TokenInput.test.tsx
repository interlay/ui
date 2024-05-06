import { blur, testA11y, render } from '@interlay/test-utils';
import { screen, waitFor, waitForElementToBeRemoved, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Key, createRef, useState } from 'react';

import { TokenInput } from '..';

describe('TokenInput', () => {
  it('should render correctly', () => {
    const wrapper = render(<TokenInput currency={{ decimals: 6, symbol: 'BTC' }} label='label' logoUrl='' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLInputElement>();

    render(<TokenInput ref={ref} currency={{ decimals: 6, symbol: 'BTC' }} label='label' logoUrl='' />);
    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(<TokenInput currency={{ decimals: 6, symbol: 'BTC' }} label='label' logoUrl='' />);
  });

  it('should render with placeholder', () => {
    render(<TokenInput currency={{ decimals: 6, symbol: 'BTC' }} label='label' logoUrl='' />);

    expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
  });

  it('should render with usd value', () => {
    render(<TokenInput currency={{ decimals: 6, symbol: 'BTC' }} label='label' logoUrl='' valueUSD={10} />);

    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  it('should render with default value', () => {
    render(<TokenInput currency={{ decimals: 6, symbol: 'BTC' }} defaultValue='10' label='label' logoUrl='' />);

    expect(screen.getByRole('textbox', { name: /label/i })).toHaveValue('10');
  });

  it('should display 0.01 when 0.0.1 is typed', async () => {
    render(<TokenInput currency={{ decimals: 6, symbol: 'BTC' }} label='label' logoUrl='' />);

    const input = screen.getByRole('textbox', { name: /label/i });

    userEvent.type(input, '0.0.1');

    await waitFor(() => {
      expect(input).toHaveValue('0.01');
    });
  });

  it('should display max decimals', async () => {
    render(<TokenInput currency={{ decimals: 6, symbol: 'BTC' }} label='label' logoUrl='' />);

    const input = screen.getByRole('textbox', { name: /label/i });

    userEvent.type(input, '0.0000001');

    await waitFor(() => {
      expect(input).toHaveValue('0.000000');
    });
  });

  it('should control value', async () => {
    const Component = () => {
      const [value, setValue] = useState('1');

      const handleValueChange = (value?: string | number) => setValue(value?.toString() || '');

      return (
        <TokenInput
          currency={{ decimals: 6, symbol: 'BTC' }}
          label='label'
          logoUrl=''
          value={value}
          onValueChange={handleValueChange}
        />
      );
    };

    render(<Component />);

    const input = screen.getByRole('textbox', { name: /label/i });

    expect(input).toHaveValue('1');

    userEvent.type(input, '1');

    await waitFor(() => {
      expect(input).toHaveValue('11');
    });
  });

  it('should render description', () => {
    render(
      <TokenInput
        currency={{ decimals: 6, symbol: 'BTC' }}
        description='Please select token'
        label='label'
        logoUrl=''
      />
    );

    expect(screen.getByRole('textbox', { name: /label/i })).toHaveAccessibleDescription(/please select token$/i);
  });

  describe('balance', () => {
    it('should render', () => {
      render(<TokenInput balance='10' currency={{ decimals: 6, symbol: 'BTC' }} label='label' logoUrl='' />);

      expect(screen.getByRole('definition')).toHaveTextContent('10');
    });

    it('should render human value', () => {
      render(
        <TokenInput balance='10' currency={{ decimals: 6, symbol: 'BTC' }} humanBalance={11} label='label' logoUrl='' />
      );

      expect(screen.getByRole('definition')).toHaveTextContent('11');
    });

    it('should update input when applying max', async () => {
      const handleClickBalance = jest.fn();
      const handleValueChange = jest.fn();

      render(
        <TokenInput
          balance='10'
          currency={{ decimals: 6, symbol: 'BTC' }}
          humanBalance={11}
          label='label'
          logoUrl=''
          onClickBalance={handleClickBalance}
          onValueChange={handleValueChange}
        />
      );

      userEvent.click(screen.getByRole('button', { name: /max/i }));

      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /label/i })).toHaveValue('10');
      });

      expect(handleValueChange).toHaveBeenCalledTimes(1);
      expect(handleValueChange).toHaveBeenCalledWith('10');
      expect(handleClickBalance).toHaveBeenCalledTimes(1);
      expect(handleClickBalance).toHaveBeenCalledWith('10');
    });

    it('should apply max with exact decimals', async () => {
      const handleClickBalance = jest.fn();
      const handleValueChange = jest.fn();

      render(
        <TokenInput
          balance='0.167345554041665262'
          currency={{ decimals: 18, symbol: 'ETH' }}
          label='label'
          logoUrl=''
          onClickBalance={handleClickBalance}
          onValueChange={handleValueChange}
        />
      );

      userEvent.click(screen.getByRole('button', { name: /max/i }));

      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /label/i })).toHaveValue('0.167345554041665262');
      });

      expect(handleValueChange).toHaveBeenCalledWith('0.167345554041665262');
      expect(handleClickBalance).toHaveBeenCalledWith('0.167345554041665262');
    });

    it('should apply max with correct amount decimals', async () => {
      const handleValueChange = jest.fn();

      render(
        <TokenInput
          balance='0.167345554041665262'
          currency={{ decimals: 8, symbol: 'BTC' }}
          label='label'
          logoUrl=''
          onValueChange={handleValueChange}
        />
      );

      userEvent.click(screen.getByRole('button', { name: /max/i }));

      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /label/i })).toHaveValue('0.16734555');
      });

      expect(handleValueChange).toHaveBeenCalledWith('0.16734555');
    });

    it('should not emit input onBlur when focus is in max btn', async () => {
      const handleClickBalance = jest.fn();
      const handleBlur = jest.fn();

      render(
        <TokenInput
          balance='10'
          currency={{ decimals: 6, symbol: 'BTC' }}
          label='label'
          logoUrl=''
          onBlur={handleBlur}
          onClickBalance={handleClickBalance}
        />
      );

      userEvent.type(screen.getByRole('textbox', { name: /label/i }), '1');

      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /label/i })).toHaveValue('1');
      });

      userEvent.click(screen.getByRole('button', { name: /max/i }));

      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /label/i })).toHaveValue('10');
      });

      expect(handleBlur).not.toHaveBeenCalled();

      blur(screen.getByRole('textbox', { name: /label/i }));

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('should have max btn disabled when balance is 0', async () => {
      const handleClickBalance = jest.fn();

      render(
        <TokenInput
          balance='0'
          currency={{ decimals: 6, symbol: 'BTC' }}
          humanBalance={11}
          label='label'
          logoUrl=''
          onClickBalance={handleClickBalance}
        />
      );

      expect(screen.getByRole('button', { name: /max/i })).toBeDisabled();
    });

    it('should have max btn disabled when input is disabled', async () => {
      const handleClickBalance = jest.fn();

      render(
        <TokenInput
          isDisabled
          balance='10'
          currency={{ decimals: 6, symbol: 'BTC' }}
          label='label'
          logoUrl=''
          onClickBalance={handleClickBalance}
        />
      );

      expect(screen.getByRole('button', { name: /max/i })).toBeDisabled();
    });
  });

  describe('fixed type', () => {
    it('should render with ticker adornment', () => {
      render(<TokenInput currency={{ decimals: 6, symbol: 'BTC' }} label='label' logoUrl='' />);

      expect(screen.getByText(/btc/i)).toBeInTheDocument();
    });
  });

  describe('selectable type', () => {
    const currencies = [
      { decimals: 6, symbol: 'BTC' },
      { decimals: 18, symbol: 'ETH' }
    ];

    const items = [
      { balance: 1, currency: currencies[0], balanceUSD: 10000, logoUrl: '' },
      { balance: 2, currency: currencies[1], balanceUSD: 900, logoUrl: '' }
    ];

    it('should render correctly', async () => {
      const wrapper = render(<TokenInput items={items} label='label' type='selectable' />);

      expect(() => wrapper.unmount()).not.toThrow();
    });

    it('should pass a11y', async () => {
      await testA11y(<TokenInput items={items} label='label' type='selectable' />);
    });

    it('ref should be forwarded to the modal', async () => {
      const ref = createRef<HTMLInputElement>();

      render(<TokenInput items={items} label='label' selectProps={{ modalProps: { ref } }} type='selectable' />);

      userEvent.click(screen.getByRole('button', { name: /select token/i }));

      await waitFor(() => {
        expect(screen.getByRole('dialog', { name: /select token/i })).toBeInTheDocument();
      });

      expect(ref.current).not.toBeNull();
    });

    it('should render empty value', () => {
      render(<TokenInput items={items} label='label' type='selectable' />);

      expect(screen.getByRole('button', { name: /select token/i })).toHaveTextContent(/select token$/i);
    });

    it('should render default value', () => {
      render(
        <TokenInput
          items={items}
          label='label'
          selectProps={{ defaultValue: items[0].currency.symbol }}
          type='selectable'
        />
      );

      expect(screen.getByRole('button', { name: /select token/i })).toHaveTextContent('BTC');
    });

    it('should control value and emit onChangeCurrency', async () => {
      const handleChangeCurrency = jest.fn();

      const Component = () => {
        const [value, setValue] = useState<any | undefined>(currencies[0]);

        const handleSelectionChange = (key: Key) =>
          setValue(currencies.find((currency) => currency.symbol === key.toString()));

        return (
          <TokenInput
            items={items}
            label='label'
            selectProps={{ value: value.symbol, onSelectionChange: handleSelectionChange }}
            type='selectable'
            onChangeCurrency={handleChangeCurrency}
          />
        );
      };

      render(<Component />);

      const selectBtn = screen.getByRole('button', { name: /select token/i });

      expect(selectBtn).toHaveTextContent('BTC');

      userEvent.click(selectBtn);

      await waitFor(() => {
        expect(screen.getByRole('dialog', { name: /select token/i })).toBeInTheDocument();
      });

      const dialog = within(screen.getByRole('dialog', { name: /select token/i }));

      userEvent.click(dialog.getByRole('row', { name: 'ETH' }));

      await waitForElementToBeRemoved(screen.getByRole('dialog', { name: /select token/i }));

      expect(screen.getByRole('button', { name: /select token/i })).toHaveTextContent('ETH');
      expect(handleChangeCurrency).toHaveBeenCalledWith(currencies[1]);
      expect(handleChangeCurrency).toHaveBeenCalledTimes(1);
    });

    it('should apply correct decimals when switching currency', async () => {
      render(
        <TokenInput
          items={items}
          label='label'
          selectProps={{ value: currencies[1].symbol }}
          type='selectable'
          value='0.0000000000001'
        />
      );

      const selectBtn = screen.getByRole('button', { name: /ETH/i });

      userEvent.click(selectBtn);

      await waitFor(() => {
        expect(screen.getByRole('dialog', { name: /select token/i })).toBeInTheDocument();
      });

      const dialog = within(screen.getByRole('dialog', { name: /select token/i }));

      userEvent.click(dialog.getByRole('row', { name: 'BTC' }));

      await waitForElementToBeRemoved(screen.getByRole('dialog', { name: /select token/i }));

      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /label/i })).toHaveValue('0.000000');
      });
    });

    it('should render description', () => {
      render(
        <TokenInput
          items={items}
          label='label'
          selectProps={{ description: 'Please select token' }}
          type='selectable'
        />
      );

      expect(screen.getByRole('button', { name: /select token/i })).toHaveAccessibleDescription(
        /please select token$/i
      );
    });

    it('should render select error message', () => {
      render(
        <TokenInput
          items={items}
          label='label'
          selectProps={{ errorMessage: 'Token field is required' }}
          type='selectable'
        />
      );

      expect(screen.getByRole('button', { name: /select token/i })).toHaveAccessibleDescription(
        /token field is required$/i
      );
    });
  });
});
