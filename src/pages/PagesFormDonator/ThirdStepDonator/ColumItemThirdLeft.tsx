import { IColumThirdStep } from '../../../interfaces/FormDonatorStep';
import SelectedTypeBlood from './SelectedTypeBlood.';

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
