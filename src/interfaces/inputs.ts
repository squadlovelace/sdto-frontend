import { ReactNode } from 'react';

export interface InputProps {
  textLabel: string;
  placeholder?: string;
  htmlFor: string;
  name?: string;
}

export interface InputSelectProps extends InputProps {
  children: ReactNode;
}

export interface RegisterDonator {
  register: InputProps;
}
