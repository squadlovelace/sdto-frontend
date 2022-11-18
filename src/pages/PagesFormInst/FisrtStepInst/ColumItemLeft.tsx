import { RegisterFisrtStepProps } from '../../../interfaces/registerType';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';

export const ColumItemLeft = ({ errors, control }: RegisterFisrtStepProps) => {
  return (
    <div className="flex flex-col flex-1">
      <InputItem
        htmlFor="endereco"
        placeholder="Digite o endereço da instituição"
        textLabel="E-mail"
        errors={errors}
        control={control}
      />
      <InputItem
        htmlFor="cep"
        placeholder="Digite o CEP da instituição"
        textLabel="CEP"
        errors={errors}
        control={control}
      />

    </div>
  );
};
