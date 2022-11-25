import { SelectInput } from '../../../components/Selects/Select';
import { IColumThirdStep } from '../../../interfaces/FormDonatorStep';
import { OrganOptions } from './DataOptions/DataOrgan';
import SelectedTypeBlood from './SelectedTypeBlood.';

export const ColumItemLeft = ({ errors, control }: IColumThirdStep) => (
  <div className="flex flex-col flex-1">
    <SelectedTypeBlood
      errors={errors}
      control={control}
      htmlFor="tiposanguineo"
      textLabel="Tipo sanguíneo"
    />

    <SelectInput
      errors={errors}
      control={control}
      htmlFor="orgaos"
      placeholder="Quais o(s) orgão(s) que você precisa?"
      options={OrganOptions}
      textLabel="Orgãos"
      valueMulti
    />
  </div>
);
