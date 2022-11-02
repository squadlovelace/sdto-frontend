import React from 'react';

interface Props {
  label: string;
  placeholder: string;
  htmlFor: string;
}

const InputFormACcces = ({ label, placeholder, htmlFor }: Props) => (
  <div>
    <label htmlFor={htmlFor}>
      {label}
      <input type="text" placeholder={placeholder} />
    </label>
  </div>
);

export default InputFormACcces;
