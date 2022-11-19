import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { RegisterFisrtStepProps } from '../../../interfaces/registerType';

export const ColumItemLeft = ({ errors, control }: RegisterFisrtStepProps) => (
  <div className="flex flex-col flex-1">
    <InputItem
      htmlFor="endereco"
      placeholder="Digite o seu endereço"
      textLabel="Endereço"
      errors={errors}
      control={control}
    />
    <InputItem
      htmlFor="cep"
      placeholder="Digite seu CEP"
      textLabel="CEP"
      errors={errors}
      control={control}
    />

  </div>
);
