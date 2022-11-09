import { ItemInputProps } from '../../../interfaces/inputs';

const InputName = ({ textLabel, placeholder, onChange }: ItemInputProps) => (
  <div className="w-full px-3 mb-6 md:mb-0 pt-4">
    <label
      className="block uppercase tracking-wide text-xs font-bold mb-2 text-roxo500"
      htmlFor="grid-first-name"
    >
      {textLabel}
      <input
        className="appearance-none block w-full  text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-roxo500 focus:border-roxo500 "
        name=""
        id="grid-first-name"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </label>
  </div>
);

export default InputName;
