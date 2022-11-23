import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { RegisterFisrtStepProps } from '../../../interfaces/registerType';

const ColumItemRight = ({ errors, control }: RegisterFisrtStepProps) => (
  <div className="flex flex-col flex-1">
    <InputItem
      htmlFor="confirmarEmail"
      placeholder="Digite o seu e-mail novamente"
      textLabel="Confirmar E-mail"
      errors={errors}
      control={control}
    />

    <InputItem
      htmlFor="confirmarSenha"
      placeholder="Digite a sua senha novamente"
      textLabel="Confirmar Senha"
      errors={errors}
      control={control}
    />

    <InputItem
      htmlFor="cpf"
      placeholder="Digite os digitos do seu CPF"
      textLabel="CPF"
      errors={errors}
      control={control}
    />
  </div>
);

export default ColumItemRight;