export interface Option {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const OrganOptions: readonly Option[] = [
  { value: 'Coracção', label: 'Coração', isFixed: true },
  { value: 'Rim', label: 'Rim', isFixed: true },
  { value: 'Pulmão', label: 'Pulmão', isFixed: true },
  { value: 'Fígado', label: 'Fígado', isFixed: true },
  { value: 'Cornea', label: 'Cornea', isFixed: true },
];
