import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { RegisterFisrtStepProps } from '../../../interfaces/registerType';

const ColumItemRight = ({ errors, control }: RegisterFisrtStepProps) => (
  <div className="flex flex-col flex-1">
    <InputItem
      htmlFor="cidade"
      placeholder="Digite a cidade da instituição"
      textLabel="Cidade/Município"
      errors={errors}
      control={control}
    />

    <InputItem
      htmlFor="cnpj"
      placeholder="Digite o CNPJ da instituição"
      textLabel="CNPJ"
      errors={errors}
      control={control}
    />
  </div>
);

export default ColumItemRight;
