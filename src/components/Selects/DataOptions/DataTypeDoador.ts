export interface GenreOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const TypeDonatorOptions: readonly GenreOption[] = [
  { value: 'tipo de doador 1', label: 'tipo de doador 1', isFixed: true },
  { value: 'tipo de doador 2', label: 'tipo de doador 2', isFixed: true },
  { value: 'tipo de doador 3', label: 'tipo de doador 3', isFixed: true },
];
