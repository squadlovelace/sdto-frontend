import InputSelect from '../../Inputs/InputSelect';

const SelectedTypeDonator = () => {
  return (
    <InputSelect
      htmlFor="typedonator"
      textLabel="Tipo de doador"
      name="typedonator"
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
