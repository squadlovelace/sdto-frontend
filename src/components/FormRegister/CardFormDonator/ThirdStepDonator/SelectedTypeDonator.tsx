import { useForm } from 'react-hook-form';
import { InputProps } from '../../../../interfaces/inputs';
import InputSelect from '../../Inputs/InputSelect';

const SelectedTypeDonator = () => {
  const { register } = useForm<InputProps>();
  return (
    <InputSelect
      htmlFor="typedonator"
      textLabel="Tipo de doador"
      name="typedonator"
      register={register}
    >
      <option disabled value="default">
        Selecione o tipo de doador{' '}
      </option>
      <option value="doador1+">Doador tipo1</option>
      <option value="doador2">tipode doador 2</option>
    </InputSelect>
  );
};

export default SelectedTypeDonator;
