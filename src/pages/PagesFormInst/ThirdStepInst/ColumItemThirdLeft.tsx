import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { IColumThirdStep } from '../../../interfaces/FormDonatorStep';


export const ColumItemLeft = ({ errors, control }: IColumThirdStep) => (
  <div className="flex flex-col flex-1">
     <InputItem
        htmlFor="telefone"
        placeholder="(__) _ ____-____"
        textLabel="Telefone"
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

      <InputItem
          htmlFor="complemento"
          placeholder="Digite o complemento"
          textLabel="Complemento"
          errors={errors}
          control={control}
      />
  </div>
);
