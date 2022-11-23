import * as yup from 'yup';

export const schemaDonatorSecondStep = yup.object({
  endereco: yup.string().required('O campo é obrigatório!'),
  cep: yup
    .string()
    .min(8, 'O CEP deve conter oito digitos')
    .required('O campo é obrigatório!'),
  telefone: yup
    .string()
    .min(9, 'O campo telefone deve ter nove digítos')
    .required('O campo é obrigatório!'),
  cidade: yup.string().required('O campo é obrigatório!'),
  complemento: yup.string().required('O campo é obrigatório!'),
  datadenascimento: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .required('O campo é obrigatório'),

  genero: yup
    .object()
    .shape({
      value: yup.string().required('O campo é obrigatório!'),
    })
    .required('O campo é obrigatório!')
    .nullable(),

  uf: yup
    .object()
    .shape({
      value: yup.string().required('O campo é obrigatório!'),
    })
    .required('O campo é obrigatório!')
    .nullable(),
});

export const SchemaPefilDonator = yup.object({
  endereco: yup.string().required('O campo é obrigatório!'),
  cep: yup
    .string()
    .min(8, 'O CEP deve conter oito digitos')
    .required('O campo é obrigatório!'),
  telefone: yup
    .string()
    .min(9, 'O campo telefone deve ter nove digítos')
    .required('O campo é obrigatório!'),
  cidade: yup.string().required('O campo é obrigatório!'),
  complemento: yup.string().required('O campo é obrigatório!'),
  comorbidade: yup.string(),

  orgao: yup
    .object()
    .shape({
      value: yup.string().required('O campo é obrigatório!'),
    })
    .required('O campo é obrigatório!')
    .nullable(),

  genero: yup
    .object()
    .shape({
      value: yup.string().required('O campo é obrigatório!'),
    })
    .required('O campo é obrigatório!')
    .nullable(),

  uf: yup
    .object()
    .shape({
      value: yup.string().required('O campo é obrigatório!'),
    })
    .required('O campo é obrigatório!')
    .nullable(),
});
