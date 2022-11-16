import { FunctionComponent } from 'react';
import Step3 from '../../../../assets/Step3.png';
import DivPurple from '../../../DivPurple/DivPurple';
import FooterFormAccces from '../../../FormsAcccess/FooterFormAccces';
import HeaderFormRegister from '../../HeaderFormRegister';
import BodyThirdtStepDonator from './BodyThirdStepDonator';

const ThirdStepReceptor: FunctionComponent<{
  handleStep: (i: number) => void;
}> = (props) => {
  return (
    <div className="flex  w-[100%]">
      <section className="w-[74%] ">
        <HeaderFormRegister src={Step3} alt="passo 3" />
        <BodyThirdtStepDonator {...props} />
        <FooterFormAccces />
      </section>
      <DivPurple />
    </div>
  );
};

export default ThirdStepReceptor;
