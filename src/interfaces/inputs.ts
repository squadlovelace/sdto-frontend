import { ReactNode } from 'react';
import { Control, FieldErrorsImpl } from 'react-hook-form';
import Control from 'react-select/dist/declarations/src/components/Control';

import { IFormValuegSecondStep } from './FormDonatorStep';
import { IFormValuegFirstStep } from './registerType';

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

export interface InputFisrtPage {
  htmlFor: string;
  placeholder: string;
  textLabel: string;
  errors: Partial<
    FieldErrorsImpl<{
      CPF: string;
      RG: string;
      confirmarEmail: number;
      confirmarSenha: string;
      email: string;
      senha: string;
    }>
  >;
  control: Control<IFormValuegFirstStep, any>;
}

export type ErrorsSecondStep = {
  errors: Partial<
    FieldErrorsImpl<{
      endereco: string;
      cep: string;
      telefone: string;
      cidade: string;
      uf: string;
      compleento: string;
      datadenascimento: string;
      genero: string;
    }>
  >;
};

export type ControlSecondStep = {
  control: Control<IFormValuegSecondStep, any>;
};
