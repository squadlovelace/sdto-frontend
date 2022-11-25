export interface Option {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const OrganOptions: readonly Option[] = [
  { value: 'Coracção', label: 'Coração', isFixed: true },
  { value: 'Rins', label: 'Rins', isFixed: true },
  { value: 'Pulmão', label: 'Pulmão', isFixed: true },
  { value: 'Fígado', label: 'Fígado', isFixed: true },
  { value: 'Pâncreas', label: 'Pâncreas', isFixed: true },
  { value: 'Intestino', label: 'Intestino', isFixed: true },
];
