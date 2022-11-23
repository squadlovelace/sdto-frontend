import Step1 from '../../../assets/Step1.png';
import DivPurple from '../../../components/DivPurple/DivPurple';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import BodyFirstStepReceptor from './BodyFirstStepReceptor';

const FisrtStepReceptor = () => (
  <div className="flex  w-[100%] ">
    <section className="w-[74%]">
      <HeaderFormRegister src={Step1} alt="passo 1" />
      <BodyFirstStepReceptor />
      <FooterFormAccces />
    </section>
    <DivPurple />
  </div>
);

export default FisrtStepReceptor;