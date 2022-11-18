import { RegisterFisrtStepProps } from '../../../interfaces/registerType';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';

const ColumItemRight = ({ errors, control }: RegisterFisrtStepProps) => {
  return (
    <div className="flex flex-col flex-1">
      <InputItem
        htmlFor="cidade"
        placeholder="Digite a cidade da instituição"
        textLabel="Cidade/Municipio"
        errors={errors}
        control={control}
      />

      <InputItem
        htmlFor="CNPJ"
        placeholder="Digite o CNPJ usado na instituição"
        textLabel="CNPJ"
        errors={errors}
        control={control}
      />
    </div>
  );
};

export default ColumItemRight;
