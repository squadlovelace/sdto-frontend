import SelectedOrgan from './SelectedOrgan';
import SelectedTypeBlood from './SelectedTypeBlood.';

export const ColumItemLeft = ({ errors, control }) => {
  return (
    <div className="flex flex-col flex-1">
      <SelectedTypeBlood
        errors={errors}
        control={control}
        htmlFor="tiposanguineo"
        textLabel={'Tipo sanguíneo'}
      />
      <SelectedOrgan
        errors={errors}
        control={control}
        htmlFor="orgao"
        textLabel="Orgão"
      />
    </div>
  );
};
