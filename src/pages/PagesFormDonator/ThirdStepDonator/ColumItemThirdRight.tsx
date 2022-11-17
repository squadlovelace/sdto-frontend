import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import InputWithinLabel from '../../../components/FormRegister/Inputs/InputWithinLabel';
import SelectedTypeDonator from './SelectedTypeDonator';

const ColumItemRight = ({ errors, control }) => {
  return (
    <div className="flex flex-col flex-1">
      <SelectedTypeDonator
        errors={errors}
        control={control}
        htmlFor="tipo de doador"
        textLabel="Tipo de Doador"
      />
    </div>
  );
};

export default ColumItemRight;
