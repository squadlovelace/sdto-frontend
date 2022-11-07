import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const ButtonCard = ({ children }: Props) => (
  <button
    type="button"
    className="flex flex-row justify-center items-center py-2 px-3 gap-[10px] rounded-[36px] s border-2 font-text font-bold text-x4 leading-5.5 text-white "
  >
    {children}
  </button>
);

export default ButtonCard;
