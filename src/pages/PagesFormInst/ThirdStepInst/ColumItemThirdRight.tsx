import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { UfOptions } from '../../../components/Selects/DataOptions/DataUf';
import { SelectInput } from '../../../components/Selects/Select';
import { IColumThirdStep } from '../../../interfaces/FormDonatorStep';

const ColumItemRight = ({ errors, control }: IColumThirdStep) => (
  <div className="flex flex-col flex-1">
    <InputItem
      htmlFor="cidade"
      placeholder="Digite sua Cidade"
      textLabel="Cidade"
      errors={errors}
      control={control}
    />
    <InputItem
      htmlFor="endereco"
      placeholder="Digite a Rua, Número e Bairro"
      textLabel="Endereço"
      errors={errors}
      control={control}
    />
    <SelectInput
      errors={errors}
      control={control}
      htmlFor="uf"
      options={UfOptions}
      placeholder="Qual a sua UF?"
      textLabel="UF"
      valueMulti={false}
    />
  </div>
);

export default ColumItemRight;
