export interface GenreOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const GenreOptions: readonly GenreOption[] = [
  { value: 'masculino', label: 'masculino', isFixed: true },
  { value: 'feminino', label: 'feminino', isFixed: true },
];
