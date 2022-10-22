import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ButtonSecondary = ({ children }: Props) => (
  <button
    type="button"
    className="flex flex-row justify-center items-center py-2.5 px-8 bg-white rounded-3xl font-inter font-semibold text-x3 leading-x1.5 capitalize text-roxo65 "
  >
    {children}
  </button>
);

export default ButtonSecondary;
