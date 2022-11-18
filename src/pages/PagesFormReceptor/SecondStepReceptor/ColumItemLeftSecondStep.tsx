import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import InputTeste from '../../../components/FormRegister/Inputs/InputSelect';
import InputSelect, {
  InputSelectdGenre,
  MultipleSelectPlaceholder,
} from '../../../components/FormRegister/Inputs/InputSelectdGenre';

const ColumItemLeftSecondStep = ({ errors, control }) => (
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
    {/*     <SelectGenre
      errors={errors}
      control={control}
      htmlFor="genero"
      textLabel="Gênero"
    />{' '}
    <MultipleSelectPlaceholder
      errors={errors}
      htmlFor="genero"
      placeholder="Qual é o seu gênero"
      textLabel="Genero"
      control={control}
    /> */}

    <InputTeste
      errors={errors}
      htmlFor="genero"
      placeholder="Qual é o seu gênero"
      textLabel="Genero"
      control={control}
    />
  </div>
);

export default ColumItemLeftSecondStep;
