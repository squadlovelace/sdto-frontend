import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import InputTeste from '../../../components/FormRegister/Inputs/InputSelect';
import InputSelect, {
  InputSelectdGenre,
  MultipleSelectPlaceholder,
} from '../../../components/FormRegister/Inputs/InputSelectdGenre';

const ColumItemLeftSecondStep = ({ errors, control }) => (
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
        htmlFor="cpf"
        placeholder="Digite os digitos do se CPF"
        textLabel="CPF"
        errors={errors}
        control={control}
      />
       <InputItem
        htmlFor="crm"
        placeholder="Digite o CRM caso possua"
        textLabel="CPF"
        errors={errors}
        control={control}
      />
  </div>
);

export default ColumItemLeftSecondStep;
