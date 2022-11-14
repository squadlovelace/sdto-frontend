import { useForm } from 'react-hook-form';
import { InputSelectProps } from '../../../interfaces/inputs';

const InputSelect = ({
  htmlFor,
  textLabel,
  children,
  register,
}: InputSelectProps) => {
  return (
    <div className="flex flex-col gap-[10px] mb-5">
      <label
        htmlFor={htmlFor}
        className="font-text font-normal text-x4 leading-[25px] text-roxo800"
      >
        {textLabel}
      </label>
      <select
        id={htmlFor}
        {...register('htmlFor')}
        defaultValue="default"
        className="bg-white border-2  rounded-[7px] border-[#DBDBDB] focus:outline-none focus:ring-roxo500 focus:border-roxo500 focus:border-2 font-text font-normal text-x4 leading-[25px] p-[18px] py-[11px] text-roxo500
        "
      >
        {children}
      </select>
    </div>
  );
};

export default InputSelect;
