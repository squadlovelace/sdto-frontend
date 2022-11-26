import Step1 from '../../../assets/DonatoFisrtStep.png';
import DivPurple from '../../../components/DivPurple/DivPurple';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import BodyFirstStepDonator from './BodyFirstStepDonator';

const FisrtStepDonator = () => (
  <div className="flex  w-[100%] ">
    <section className="w-[74%]">
      <HeaderFormRegister src={Step1} alt="passo 1" />
      <BodyFirstStepDonator />
      <FooterFormAccces />
    </section>
    <DivPurple />
  </div>
);

export default FisrtStepDonator;
