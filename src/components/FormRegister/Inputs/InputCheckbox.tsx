import { useForm } from 'react-hook-form';

interface Props {
  htmlFor: string;
  textLabel: string;
  nameInput: string;
}

const InputCheckbox = ({ htmlFor, textLabel, nameInput }: Props) => {
  const { register } = useForm<Props>();

  return (
    <div className="flex gap-3 mt-[20px] ">
      <input
        type="checkbox"
        id={htmlFor}
        value={htmlFor}
        className="h-8 w-8"
        {...register('htmlFor')}
      />
      <label
        htmlFor={htmlFor}
        className="font-text font-bold text-x2 leading-5 text-roxo800"
      >
        {textLabel}
      </label>
    </div>
  );
};

export default InputCheckbox;
