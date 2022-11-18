import { FunctionComponent } from 'react';
import Step3 from '../../../../assets/Step3.png';
import DivPurple from '../../../components/DivPurple/DivPurple';
import FooterFormAccces from '../../../components/FormsAcccess/FooterFormAccces';
import HeaderFormRegister from '../../../components/FormRegister/HeaderFormRegister';
import BodyThirdtStepInst from './BodyThirdStepInst';

const ThirdStepDonator: FunctionComponent<{
  handleStep: (i: number) => void;
}> = (props) => {
  return (
    <div className="flex  w-[100%]">
      <section className="w-[74%] ">
        <HeaderFormRegister src={Step3} alt="passo 3" />
        <BodyThirdtStepInst {...props} />
        <FooterFormAccces />
      </section>
      <DivPurple></DivPurple>
    </div>
  );
};

export default ThirdStepDonator;
