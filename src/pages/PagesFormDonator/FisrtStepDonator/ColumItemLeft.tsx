import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { RegisterFisrtStepProps } from '../../../interfaces/registerType';

export const ColumItemLeft = ({ errors, control }: RegisterFisrtStepProps) => (
  <div className="flex flex-col flex-1">
    <InputItem
      htmlFor="email"
      placeholder="Digite o seu e-mail"
      textLabel="E-mail"
      errors={errors}
      control={control}
    />
    <InputItem
      htmlFor="senha"
      placeholder="Digite a sua senha"
      textLabel="Senha"
      errors={errors}
      control={control}
    />
    <InputItem
      htmlFor="rg"
      placeholder="Digite os digitos do se RG"
      textLabel="RG"
      errors={errors}
      control={control}
    />
  </div>
);
