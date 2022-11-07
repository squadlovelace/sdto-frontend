import { ItemInputProps } from '../../../interfaces/inputs';

const InputItems = ({
  onChange,
  placeholder,
  textLabel,
  value,
  name,
  type,
}: ItemInputProps) => (
  <div className="w-full md:w-1/2 px-3 pt-4">
    <label
      className="block uppercase tracking-wide text-xs font-bold mb-2 text-roxo500"
      htmlFor="grid-last-name"
    >
      {textLabel}
      <input
        className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  </div>
);

export default InputItems;
