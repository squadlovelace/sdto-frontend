import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { IColumThirdStep } from '../../../interfaces/FormDonatorStep';
import SelectedTypeBlood from './SelectedTypeBlood.';

export const ColumItemLeft = ({ errors, control }: IColumThirdStep) => (
  <div className="flex flex-col flex-1">
    {/* <SelectedTypeBlood
      errors={errors}
      control={control}
      htmlFor="tiposanguineo"
      textLabel="Tipo sanguíneo"
    /> */}

    <InputItem
      errors={errors}
      control={control}
      htmlFor="tiposanguineo"
      textLabel="Tipo sanguíneo"
      placeholder="Tipo sanguíneo"
    />

    <InputItem
      htmlFor="orgao"
      placeholder="Digite o órgão que necessita"
      textLabel="Órgão"
      errors={errors}
      control={control}
    />

  </div>
);
