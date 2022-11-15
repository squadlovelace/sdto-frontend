import InputItem from '../../Inputs/InputItem';
import { SelectGenre } from './SelectGenre';

interface ISelectedValues {
  genre: string;
}

const ColumItemLeftSecondStep = ({ errors, control }) => {
  return (
    <div className="flex flex-col flex-1">
      <InputItem
        htmlFor="endereco"
        placeholder="Digite seu endereço"
        textLabel="Endereço"
        errors={errors}
        control={control}
      />
      <InputItem
        htmlFor="cep"
        placeholder="Digite o seu CEP"
        textLabel="CEP"
        errors={errors}
        control={control}
      />
      <InputItem
        htmlFor="telefone"
        placeholder="(__) _ ____-____"
        textLabel="Telefone"
        errors={errors}
        control={control}
      />
      <SelectGenre
        errors={errors}
        control={control}
        htmlFor="genero"
        textLabel="Gênero"
      />
    </div>
  );
};

export default ColumItemLeftSecondStep;
