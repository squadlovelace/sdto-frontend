import DivPurple from '../../../components/DivPurple/DivPurple';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import BodyFirstStepReceptor from './BodyFirstStepReceptor';

import Step1 from '../../../assets/Step1.png';

const FisrtStepDonator = () => {
  return (
    <div className="flex  w-[100%] ">
      <section className="w-[74%]">
        <HeaderFormRegister src={Step1} alt="passo 1" />
        <BodyFirstStepReceptor />
        <FooterFormAccces />
      </section>
      <DivPurple />
    </div>
  );
};

export default FisrtStepDonator;
