
import InputItem from '../../../components/FormRegister/Inputs/InputItem';

export const ColumItemLeft = ({ errors, control }) => {
  return (
    <div className="flex flex-col flex-1">
        <InputItem
        htmlFor="telefone"
        placeholder="(_ _ ) _ _ _ _ _ - _ _ _ _"
        textLabel="Telefone"
        errors={errors}
        control={control}
      />
      <InputItem
        htmlFor="cep"
        placeholder="Digite a seu cep"
        textLabel="CEP"
        errors={errors}
        control={control}
      />
      <InputItem
        htmlFor="complemento"
        placeholder="Digite o complemento do seu endereço"
        textLabel="complemento"
        errors={errors}
        control={control}
      />
    </div>
  );
};
