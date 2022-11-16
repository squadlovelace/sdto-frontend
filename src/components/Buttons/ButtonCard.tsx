import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const ButtonCard = ({ children }: Props) => (
  <button
    type="button"
    className="flex flex-row justify-center items-center max-w-[134px] py-2 px-3 gap-[10px] rounded-[36px] s border-[1px] font-text font-semibold text-x2 leading-5.5 text-white "
  >
    {children}
  </button>
);

export default ButtonCard;
