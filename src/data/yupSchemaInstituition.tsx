import * as yup from 'yup';

export const schemaInstituition = yup.object({
  endereco: yup.string().required('campo invállido '),
  cidade: yup.string().required('campo inválido'),
  cep: yup.string().required('campo inválido'),
});
