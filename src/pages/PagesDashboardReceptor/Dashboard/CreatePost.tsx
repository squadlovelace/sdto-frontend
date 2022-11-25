import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import InputITextArea from '../../../components/FormRegister/Inputs/InputITextArea';
import { schemaPost } from '../../../data/yupShemaPost';

interface Props {
  letterInitialUser: string;
}

const CreatePost = ({ letterInitialUser }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaPost),
  });

  const onSubmit = (data) => {
    console.log({ data });

    console.log('deu certo');
    reset();
  };
  return (
    <div className="  flex gap-[10px] mt-[60px]">
      <div className="bg-blue-400 rounded-[50%] w-[48px] h-[48px]   flex justify-center items-center text-[18px] mt-[15px]">
        {letterInitialUser}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[calc(100vw-800px)] "
      >
        <InputItem
          errors={errors}
          control={control}
          htmlFor="title"
          placeholder="Título da postagem"
        />
        <InputITextArea
          errors={errors}
          control={control}
          htmlFor="textPost"
          placeholder="Escreva aqui a sua postagem"
        />
        <ButtonFormRegister text="Postar" />
      </form>
    </div>
  );
};

export default CreatePost;
