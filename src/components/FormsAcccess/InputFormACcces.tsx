import React from 'react';
interface Props {
  label: string;
  placeholder: string;
  htmlFor: string;
  value?: string;
  onChange?: string | any;
}

const InputFormACcces = ({
  label,
  placeholder,
  htmlFor,
  value,
  onChange,
}: Props) => (
  <div className="flex flex-col gap-2.5 mb-[30px]">
    <label
      htmlFor={htmlFor}
      className="font-text font-normal text-x4 leading-[25px] text-roxo800"
    >
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="h-[48px] border-solid border-2 border-[#DDDCDD] rounded-[7px] focus:outline-none focus:ring-roxo500 focus:border-roxo500 pl-5"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputFormACcces;
