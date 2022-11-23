import SelectedTypeDonator from '../../../components/Selects/SelectedTypeDonator';
import { IColumThirdStep } from '../../../interfaces/FormDonatorStep';

const ColumItemRight = ({ errors, control }: IColumThirdStep) => (
  <div className="flex flex-col flex-1">
    <SelectedTypeDonator
      errors={errors}
      control={control}
      htmlFor="tipodedoador"
      textLabel="Tipo de Doador"
    />
  </div>
);

export default ColumItemRight;
