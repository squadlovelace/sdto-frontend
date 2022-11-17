export interface Option {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const TypeBloodOptions: readonly Option[] = [
  { value: 'A+', label: 'A+', isFixed: true },
  { value: 'A-', label: 'A-', isFixed: true },
  { value: 'B+', label: 'B+', isFixed: true },
  { value: 'B-', label: 'B-', isFixed: true },
  { value: 'AB+', label: 'AB+', isFixed: true },
];
