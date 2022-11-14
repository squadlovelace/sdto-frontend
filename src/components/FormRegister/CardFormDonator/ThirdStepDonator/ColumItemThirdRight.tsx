import InputItem from '../../Inputs/InputItem';
import InputWithinLabel from '../../Inputs/InputWithinLabel';
import SelectedTypeDonator from './SelectedTypeDonator';

const ColumItemRight = () => {
  return (
    <div className="flex flex-col flex-1">
      <SelectedTypeDonator />
      <InputWithinLabel
        placeholder="Orgãos selecionados"
        inputName="organsselected"
      />
    </div>
  );
};

export default ColumItemRight;
