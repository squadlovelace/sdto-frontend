import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ButtonPrimaty = ({ children }: Props) => (
  <button
    type="button"
    className="flex flex-row justify-center items-center py-2 px-3 w-32 h-9 font-text font-bold leading-6 text-x4 text-white gap-2  rounded-3xl border-white border-solid border-2"
  >
    {children}
  </button>
);

export default ButtonPrimaty;
