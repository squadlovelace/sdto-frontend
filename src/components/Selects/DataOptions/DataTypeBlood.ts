export interface Option {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const TypeBloodOptions = [
  { value: 'A+', label: 'A+', isFixed: true },
  { value: 'A-', label: 'A-', isFixed: true },
  { value: 'B+', label: 'B+', isFixed: true },
  { value: 'B-', label: 'B-', isFixed: true },
  { value: 'AB+', label: 'AB+', isFixed: true },
  { value: 'AB-', label: 'AB-', isFixed: true },
  { value: 'O+', label: 'O+', isFixed: true },
  { value: 'O-', label: 'O-', isFixed: true },
];
