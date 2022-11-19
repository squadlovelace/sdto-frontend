import Step1 from '../../../assets/Step1.png';
import DivPurple from '../../../components/DivPurple/DivPurple';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import BodyFirstStepInst from './BodyFirstStepInst';

const FirstStepInst = () => (
  <div className="flex  w-[100%] ">
    <section className="w-[74%]">
      <HeaderFormRegister src={Step1} alt="passo 1" />
      <BodyFirstStepInst />
      <FooterFormAccces />
    </section>
    <DivPurple />
  </div>
);

export default FirstStepInst;
