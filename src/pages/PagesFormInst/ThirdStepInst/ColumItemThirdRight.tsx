import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { IColumThirdStep } from '../../../interfaces/FormDonatorStep';


const ColumItemRight = ({ errors, control }: IColumThirdStep) => (
  <div className="flex flex-col flex-1">
     <InputItem
      htmlFor="Cidade"
      placeholder="Digite sua Cidade"
      textLabel="Telefone"
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
       <InputItem
      htmlFor="uf"
      placeholder=" Digite a UF"
      textLabel="UF"
      errors={errors}
      control={control}
    />
  </div>
);

export default ColumItemRight;
