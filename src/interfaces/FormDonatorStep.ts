import { Control, FieldErrorsImpl } from 'react-hook-form';

export interface IFormValuegSecondStep {
  endereco: string;
  cep: string;
  telefone: string;
  cidade: string;
  uf: string;
  compleento: string;
  datadenascimento: string;
  genero: string;
}

export interface IColumSecondStep {
  control: Control<IFormValuegSecondStep, any>;
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
}

export interface SelectSecondStep extends IColumSecondStep {
  htmlFor: string;
  textLabel: string;
}

export interface ValueThirdStep {
  orgao: string,
  comorbidade: string,
  rgct: string,
  tiposanguineo: string;
  tipodedoador?: string;
  termosDeServico: boolean;
}
export interface IFormValuegSecondStep {
  endereco: string;
  cep: string;
  telefone: string;
  cidade: string;
  uf: string;
  complemento: string;
  datadenascimento: string;
  genero: string;
}

export interface IColumThirdStep {
  control: Control<ValueThirdStep, any>;
  errors: Partial<
    FieldErrorsImpl<{
      tiposanguineo: string;
      tipodedoador: string;
      termosDeServico: boolean;
    }>
  >;
}

export interface SelectThirdStep extends IColumThirdStep {
  htmlFor: string;
  textLabel: string;
}
