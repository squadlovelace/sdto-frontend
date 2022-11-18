import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import InputWithinLabel from '../../../components/FormRegister/Inputs/InputWithinLabel';
import SelectedTypeDonator from './SelectedTypeDonator';

const ColumItemRight = ({ errors, control }) => {
  return (
    <div className="flex flex-col flex-1">
   <InputItem
      htmlFor="RGCT"
      textLabel="RGCT"
      placeholder="Digite seu RGCT"
      errors={errors}
      control={control}
    />

  <InputItem
        htmlFor="orgaos selecionados"
        textLabel="Orgaos selecionados"
        placeholder="Orgãos selecionados"
        errors={errors}
        control={control}
      />

  <InputItem
            htmlFor="comorbidade"
            placeholder="Digite sua comorbidade"
            textLabel="Comorbidade"
            errors={errors}
            control={control}
          />
    </div>
  );
};

export default ColumItemRight;
