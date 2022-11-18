export interface UfOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const UfOptions: readonly UfOption[] = [
  { value: 'AC', label: 'AC', isFixed: true },
  { value: 'AL', label: 'AL', isFixed: true },
  { value: 'AP', label: 'AP', isFixed: true },
  { value: 'AM', label: 'AM', isFixed: true },
  { value: 'BA', label: 'BA', isFixed: true },
  { value: 'CE', label: 'CE', isFixed: true },
  { value: 'DF', label: 'DF', isFixed: true },
  { value: 'ES', label: 'ES', isFixed: true },
  { value: 'GO', label: 'GO', isFixed: true },
  { value: 'MA', label: 'MA', isFixed: true },
  { value: 'MT', label: 'MT', isFixed: true },
  { value: 'MS', label: 'MS', isFixed: true },
  { value: 'MG', label: 'MG', isFixed: true },
  { value: 'PA', label: 'PA', isFixed: true },
  { value: 'PB', label: 'PB', isFixed: true },
  { value: 'PE', label: 'PE', isFixed: true },
  { value: 'PI', label: 'PI', isFixed: true },
  { value: 'PR', label: 'PR', isFixed: true },
  { value: 'RJ', label: 'RJ', isFixed: true },
  { value: 'RN', label: 'RN', isFixed: true },
  { value: 'RO', label: 'RO', isFixed: true },
  { value: 'RR', label: 'RR', isFixed: true },
  { value: 'RS', label: 'RS', isFixed: true },
  { value: 'SC', label: 'SC', isFixed: true },
  { value: 'SP', label: 'SP', isFixed: true },
  { value: 'SE', label: 'SE', isFixed: true },
  { value: 'TO', label: 'TO', isFixed: true },
];
