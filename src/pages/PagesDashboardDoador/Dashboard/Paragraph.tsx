import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Paragraph = ({ children }: Props) => (
  <p className="font-text text-[16px] leading-[22px] text-justify">
    {children}
  </p>
);

export default Paragraph;
