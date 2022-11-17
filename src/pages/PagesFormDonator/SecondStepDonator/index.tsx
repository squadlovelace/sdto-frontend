import Step2 from '../../../assets/Step2.png';
import DivPurple from '../../../components/DivPurple/DivPurple';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import BodySecondDonator from './BodySecondDonator';

const SecondStepDonator = () => {
  return (
    <div className="flex  w-[100%] ">
      <section className="w-[74%]">
        <HeaderFormRegister src={Step2} alt="passo 2" />
        <BodySecondDonator />
        <FooterFormAccces />
      </section>
      <DivPurple />
    </div>
  );
};

export default SecondStepDonator;
