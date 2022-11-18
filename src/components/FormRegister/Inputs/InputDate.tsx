import { FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';

const InputDate = ({ htmlFor, textLabel, errors, control }) => (
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
          <FormHelperText className="text-[#db0000] top-[630px] pl-5 absolute">
            {errors[htmlFor] ? errors[htmlFor].message : ''}
          </FormHelperText>
        </>
      )}
    />
  </div>
);

export default InputDate;
