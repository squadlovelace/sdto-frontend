import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ButtonSecondary = ({ children }: Props) => (
  <button
    type="button"
    className="flex flex-row justify-center items-center px-2 py-3 gap-2 w-32 h-9 bg-white rounded-3xl font-text font-normal text-x4 text-roxo65 leading-6"
  >
    {children}
  </button>
);

export default ButtonSecondary;
