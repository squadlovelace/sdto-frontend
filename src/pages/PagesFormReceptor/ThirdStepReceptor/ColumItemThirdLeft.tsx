import SelectedOrgan from './SelectedOrgan';
import SelectedTypeBlood from './SelectedTypeBlood.';
import SelectedTypeOrgan from './SelectedOrgan';

export const ColumItemLeft = ({ errors, control }) => {
  return (
    <div className="flex flex-col flex-1">
      <SelectedTypeBlood
        errors={errors}
        control={control}
        htmlFor="tiposanguineo"
        textLabel={'Tipo sanguíneo'}
      />

      <SelectedTypeOrgan
        errors={errors}
        control={control}
        htmlFor="orgao"
        textLabel={'orgão'}
      />
    </div>
  );
};
