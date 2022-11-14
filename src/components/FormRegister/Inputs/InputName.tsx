import { Controller, UseFormRegister } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import { FirstStepTypes } from '../../../interfaces/registerType';
import 'react-toastify/dist/ReactToastify.css';
import { TextField } from '@mui/material';

interface Props {
  htmlFor: string;
  textLabel: string;
  placeholder: string;
}

const InputName = ({ htmlFor, placeholder, textLabel, errors, control }) => {
  return (
    <>
      <div className="flex flex-col gap-[10px] mb-5">
        {/*         <label htmlFor={htmlFor}>
          <span className="font-text font-normal text-x4 leading-[25px] text-roxo800">
            {textLabel}
          </span>
        </label>

        <input
          type="text"
          placeholder={placeholder}
          id={htmlFor}
          className="border-2 border-solid rounded-[7px] border-[#DBDBDB] focus:outline-none focus:ring-roxo500 focus:border-roxo500 focus:border-2 font-text font-normal text-x4 leading-[25px] p-[18px] py-[11px] text-roxo500"
        /> */}

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

              <TextField
                placeholder={placeholder}
                id={htmlFor}
                className="border-2 border-solid rounded-[7px] border-[#DBDBDB] focus:outline-none focus:ring-roxo500 focus:border-roxo500 focus:border-2 font-text font-normal text-x4 leading-[25px] p-[18px] py-[11px] text-roxo500"
                {...field}
                fullWidth
                error={!!errors[htmlFor]}
                helperText={errors[htmlFor] ? errors[htmlFor].message : ''}
              />
            </>
          )}
        />
      </div>
    </>
  );
};

export default InputName;
