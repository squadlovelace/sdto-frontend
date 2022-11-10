import { InputProps } from '../../../interfaces/inputs';

const InputDate = ({ htmlFor, textLabel }: InputProps) => {
  return (
    <div className="flex flex-col gap-[10px] mb-5">
      <label htmlFor={htmlFor}>
        <span className="font-text font-normal text-x4 leading-[25px] text-roxo800">
          {textLabel}
        </span>
      </label>

      <input
        type="date"
        name="birthday"
        className="border-2 border-solid rounded-[7px] border-[#DBDBDB] focus:outline-none focus:ring-roxo500 focus:border-roxo500 focus:border-2 font-text font-normal text-x4 leading-[25px] p-[18px] py-[11px] text-roxo500 	"
      />
    </div>
  );
};

export default InputDate;
