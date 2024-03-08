export type Variants = 'primary' | 'secondary' | 'tertiary';
export type MeterVariants = Exclude<Variants, 'tertiary'>;
