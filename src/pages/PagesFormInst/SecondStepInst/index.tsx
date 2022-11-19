import Step2 from '../../../assets/Step2.png';
import DivPurple from '../../../components/DivPurple/DivPurple';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import BodySecondInst from './BodySecondInst';

const SecondStepInst = () => (
    <div className="flex  w-[100%] ">
      <section className="w-[74%]">
        <HeaderFormRegister src={Step2} alt="passo 2" />
        <BodySecondInst />
        <FooterFormAccces />
      </section>
      <DivPurple />
    </div>
  );

export default SecondStepInst;
