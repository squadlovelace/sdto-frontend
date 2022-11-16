import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DivInfo = ({ children }: Props) => (
  <div className="ml-[200px] mr-[280px]">{children}</div>
);

export default DivInfo;
