import { Controller, useForm } from 'react-hook-form';
import { InputProps } from '../../../interfaces/inputs';

const InputDate = ({ htmlFor, textLabel, errors, control }) => {
  return (
    <div className="flex flex-col gap-[10px] mb-5">
      <Controller
        control={control}
        name={htmlFor}
        defaultValue=""
        render={({ field }) => (
          <>
            <label htmlFor={htmlFor}>
              <span className="font-text font-normal text-x4 leading-[25px] text-roxo800">
                {textLabel}
              </span>
            </label>

            <input
              type="date"
              {...field}
              className="border-2 border-solid rounded-[7px] border-[#DBDBDB] focus:outline-none focus:ring-roxo500 focus:border-roxo500 focus:border-2 font-text font-normal text-x4 leading-[25px] p-[18px] py-[11px] text-roxo500 	"
            />
            <span className="absolute text-red-600  text-[12px] bottom-[300px] right-[680px]">
              {errors['datadenascimento']?.message}
            </span>
          </>
        )}
      />
    </div>
  );
};

export default InputDate;
