import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { SelectGenre } from '../../../components/Selects/SelectGenre';
import { IColumSecondStep } from '../../../interfaces/FormDonatorStep';

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
    <SelectGenre
      errors={errors}
      control={control}
      htmlFor="genero"
      textLabel="Gênero"
    />
  </div>
);

export default ColumItemLeftSecondStep;
