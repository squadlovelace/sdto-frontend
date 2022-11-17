export interface GenreOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const GenreOptions: readonly GenreOption[] = [
  { value: 'Masculino', label: 'Masculino', isFixed: true },
  { value: 'Feminino', label: 'Feminino', isFixed: true },
];
