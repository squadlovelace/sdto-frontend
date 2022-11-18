import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import InputWithinLabel from '../../../components/FormRegister/Inputs/InputWithinLabel';
import SelectedTypeDonator from './SelectedTypeDonator';

const ColumItemRight = ({ errors, control }) => {
  return (
    <div className="flex flex-col flex-1">
   <InputItem
      htmlFor="cidade"
      textLabel="Cidade"
      placeholder="Digite sua Cidade"
      errors={errors}
      control={control}
    />

  <InputItem
        htmlFor="endereco"
        textLabel="Endereço"
        placeholder="Digite Rua ,Bairro e Número"
        errors={errors}
        control={control}
      />

  <InputItem
            htmlFor="uf"
            placeholder="Digite a UF"
            textLabel="UF"
            errors={errors}
            control={control}
          />
    </div>
  );
};

export default ColumItemRight;
