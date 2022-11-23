import SelectedTypeBlood from '../../../components/Selects/SelectedTypeBlood.';
import { IColumThirdStep } from '../../../interfaces/FormDonatorStep';

export const ColumItemLeft = ({ errors, control }: IColumThirdStep) => (
  <div className="flex flex-col flex-1">
    <SelectedTypeBlood
      errors={errors}
      control={control}
      htmlFor="tiposanguineo"
      textLabel="Tipo sanguíneo"
    />
  </div>
);
