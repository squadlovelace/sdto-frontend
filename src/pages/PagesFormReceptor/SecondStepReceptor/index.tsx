import Step2 from '../../../assets/Step2.png';
import DivPurple from '../../../components/DivPurple/DivPurple';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import BodySecondReceptor from './BodySecondReceptor';

const SecondStepReceptor = () => (
    <div className="flex  w-[100%] ">
      <section className="w-[74%]">
        <HeaderFormRegister src={Step2} alt="passo 2" />
        <BodySecondReceptor />
        <FooterFormAccces />
      </section>
      <DivPurple />
    </div>
  );

export default SecondStepReceptor;
