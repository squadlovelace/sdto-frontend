import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { IColumSecondStep } from '../../../interfaces/FormDonatorStep';
import { GenreOptions } from './DataGenre';
import { SelectGenre } from './SelectGenre';

const ColumItemLeftSecondStep = ({ errors, control }: IColumSecondStep) => (
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
    <InputItem
      errors={errors}
      control={control}
      htmlFor="genero"
      placeholder="Gênero"
      textLabel="Gênero"
    />
    {/* <SelectGenre
      errors={errors}
      control={control}
      htmlFor="genero"
      textLabel="Gênero"
      options={GenreOptions}
    /> */}
  </div>
);

export default ColumItemLeftSecondStep;
