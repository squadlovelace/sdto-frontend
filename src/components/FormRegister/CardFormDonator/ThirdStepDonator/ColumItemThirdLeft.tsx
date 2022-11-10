import SelectedOrgan from './SelectedOrgan';
import SelectedTypeBlood from './SelectedTypeBlood.';

export const ColumItemLeft = () => {
  return (
    <div className="flex flex-col flex-1">
      <SelectedTypeBlood />
      <SelectedOrgan />
    </div>
  );
};
