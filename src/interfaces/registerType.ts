import { Control, FieldErrorsImpl } from 'react-hook-form';

export type FirstStepTypes = {
  Nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  confirmarEmail: string;
  RG: string;
  CPF: string;
};

export interface IFormValuegFirstStep {
  nome: string;
  CPF?: string;
  RG?: string;
  confirmarEmail?: number;
  confirmarSenha?: string;
  email: string;
  senha?: string;
}

export interface RegisterFisrtStepProps {
  errors?: Partial<
    FieldErrorsImpl<{
      CPF: string;
      RG: string;
      confirmarEmail: number;
      confirmarSenha: string;
      email: string;
      senha: string;
    }>
  >;

  control?: Control<IFormValuegFirstStep, any>;
}

export interface InputFirtStep extends RegisterFisrtStepProps {
  htmlFor: string;
  placeholder: string;
  textLabel: string;
}
