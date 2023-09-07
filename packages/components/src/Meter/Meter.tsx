import { HTMLAttributes, useEffect, useState } from 'react';
import { MeterVariants, Status } from '@just_testing13/theme';

import { Span } from '../Text';

import { Indicator } from './Indicator';
import { StyledContainer, StyledIndicatorWrapper, StyledMeter, StyledWrapper } from './Meter.style';
import { RangeIndicators } from './RangeIndicators';
import { getBarPercentage, getStatus } from './utils';

const getPosition = (percentage: number) => (percentage > 100 ? 100 : percentage < 0 ? 0 : percentage);

type MeterRanges = [number, number, number, number];

type Props = {
  variant?: MeterVariants;
  value?: number;
  ranges?: MeterRanges;
  showIndicator?: boolean;
  showValue?: boolean;
  onChange?: (status: Status) => void;
  formatOptions?: Intl.NumberFormatOptions;
};

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>;

type MeterProps = Props & NativeAttrs;

const Meter = ({
  value = 0,
  ranges,
  onChange,
  variant = 'primary',
  className,
  style,
  hidden,
  formatOptions = { maximumFractionDigits: 2 },
  ...props
}: MeterProps): JSX.Element => {
  const [status, setStatus] = useState<Status>();
  const isPrimary = variant === 'primary';
  const positionValue = isPrimary ? getBarPercentage(value, ranges, status) : value;
  const position = getPosition(positionValue);

  useEffect(() => {
    const newStatus = getStatus(value, ranges, !isPrimary);

    if (!!newStatus && newStatus !== status) {
      setStatus(newStatus);
      onChange?.(newStatus);
    }
  }, [isPrimary, onChange, ranges, status, value, variant]);

  return (
    <StyledWrapper $variant={variant} className={className} hidden={hidden} style={style}>
      <StyledContainer>
        <StyledMeter $hasRanges={!!ranges} $position={position} $variant={variant} {...props} />
        <StyledIndicatorWrapper
          $position={position}
          $variant={variant}
          alignItems='center'
          direction='column'
          gap='spacing1'
          justifyContent='center'
        >
          <Indicator />
          {!isPrimary && <Span>{Intl.NumberFormat(undefined, formatOptions).format(position)}%</Span>}
        </StyledIndicatorWrapper>
        {!isPrimary && !!ranges && <RangeIndicators ranges={ranges} />}
      </StyledContainer>
    </StyledWrapper>
  );
};

export { Meter };
export type { MeterProps, MeterRanges };
