import { useForm } from 'react-hook-form';

interface Props {
  placeholder: string;
  inputName: string;
}

const InputWithinLabel = ({ placeholder, inputName }: Props) => {
  const { register } = useForm();

  return <input {...register('exampleRequired', { required: true })} />;
};

export default InputWithinLabel;
