import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { IColumThirdStep } from '../../../interfaces/FormDonatorStep';


const ColumItemRight = ({ errors, control }: IColumThirdStep) => (
  <div className="flex flex-col flex-1">
    <InputItem
      htmlFor="rgct"
      placeholder="Digite seu RGCT"
      textLabel="RGCT"
      errors={errors}
      control={control}
    />
 
  </div>
);

export default ColumItemRight;
