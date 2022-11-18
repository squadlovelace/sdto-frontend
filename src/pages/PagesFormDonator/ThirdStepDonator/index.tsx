import Step3 from '../../../assets/Step3.png';
import DivPurple from '../../../components/DivPurple/DivPurple';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import BodyThirdtStepDonator from './BodyThirdStepDonator';

const ThirdStepDonator = () => (
  <div className="flex  w-[100%]">
    <section className="w-[74%] ">
      <HeaderFormRegister src={Step3} alt="passo 3" />
      <BodyThirdtStepDonator />
      <FooterFormAccces />
    </section>
    <DivPurple />
  </div>
);

export default ThirdStepDonator;
