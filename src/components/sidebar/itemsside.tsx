import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  icon: ReactNode;
  url: string;

  text: string;
}

const Itemsside = ({ icon, text, url }: Props) => (
  <Link to={url}>
    <div className="flex gap-3 items-center  cursor-pointer">
      <div style={{ color: '#3a0136', height: '24px', width: '24px' }}>
        {icon}
      </div>
      <span className="font-text font-semibold text-[16px] leading-[24px] letter tracking-[0.2px] text-roxo800">
        {text}
      </span>
    </div>
  </Link>
);

export default Itemsside;
