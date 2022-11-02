import DivPurple from '../DivPurple/DivPurple';
import DivInfo from './DivInfo';
import FooterFormAccces from './FooterFormAccces';
import HeaderFormAccess from './HeaderFormAccess';

const LayoutFormAccess = () => (
  <div className="flex  w-[100%]">
    <section className="w-[74%]">
      <HeaderFormAccess />
      <DivInfo />
      <FooterFormAccces />
    </section>
    <DivPurple />
  </div>
);

export default LayoutFormAccess;
