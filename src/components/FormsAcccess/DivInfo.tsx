import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DivInfo = ({ children }: Props) => <div>{children}</div>;

export default DivInfo;
