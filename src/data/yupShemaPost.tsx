import * as yup from 'yup';

export const schemaPost = yup.object({
  title: yup.string().required('campo invállido '),
  textPost: yup.string().required('campo inválido'),
});
