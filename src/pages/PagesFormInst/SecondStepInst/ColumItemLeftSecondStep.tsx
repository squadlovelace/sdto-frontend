import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { IColumSecondStep } from '../../../interfaces/FormDonatorStep';
import { GenreOptions } from './DataGenre';
import { SelectGenre } from './SelectGenre';

const ColumItemLeftSecondStep = ({ errors, control }: IColumSecondStep) => (
  <div className="flex flex-col flex-1">
    <InputItem
      htmlFor="email"
      placeholder="Digite seu email"
      textLabel="E-mail"
      errors={errors}
      control={control}
    />
    <InputItem
      htmlFor="senha"
      placeholder="Digite sua senha"
      textLabel="Senha"
      errors={errors}
      control={control}
    />
    <InputItem
      htmlFor="cpf"
      placeholder="Digite seu CPF"
      textLabel="CPF"
      errors={errors}
      control={control}
    />
        <InputItem
      htmlFor="crm"
      placeholder="Digite seu CRM"
      textLabel="CRM"
      errors={errors}
      control={control}
    />
  
  </div>
);

export default ColumItemLeftSecondStep;
