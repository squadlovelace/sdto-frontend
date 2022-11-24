import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;

  text: string;
}

const Itemsside = ({ icon, text }: Props) => (
  <div className="flex gap-3 items-center  cursor-pointer">
    <div style={{ color: '#3a0136', height: '24px', width: '24px' }}>
      {icon}
    </div>
    <span className="font-text font-semibold text-[16px] leading-[24px] letter tracking-[0.2px] text-roxo800">
      {text}
    </span>
  </div>
);

export default Itemsside;
