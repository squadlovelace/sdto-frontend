import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ButtonPrimaty = ({ children }: Props) => (
  <button
    type="button"
    className="flex flex-row justify-center items-center py-2.5 px-8 bg-roxo65 rounded-3xl font-inter font-semibold text-x3 leading-x1.5 capitalize text-white border-2 "
  >
    {children}
  </button>
);

export default ButtonPrimaty;
