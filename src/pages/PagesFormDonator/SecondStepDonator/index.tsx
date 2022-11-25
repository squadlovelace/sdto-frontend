import Step2 from '../../../assets/DonatorSecondStep.png';
import DivPurple from '../../../components/DivPurple/DivPurple';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import BodySecondDonator from './BodySecondDonator';

const SecondStepDonator = () => (
  <div className="flex  w-[100%] ">
    <section className="w-[74%]">
      <HeaderFormRegister src={Step2} alt="passo 2" />
      <BodySecondDonator />
      <FooterFormAccces />
    </section>
    <DivPurple />
  </div>
);

export default SecondStepDonator;
