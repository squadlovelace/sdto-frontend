import { FunctionComponent } from 'react';
import DivPurple from '../../../DivPurple/DivPurple';
import FooterFormAccces from '../../../FormsAcccess/FooterFormAccces';
import HeaderFormRegister from '../../HeaderFormRegister';
import BodyFirstStepDonator from './BodyFirstStepDonator';

import Step1 from '../../../../assets/Step1.png';

const FisrtStepDonator: FunctionComponent<{
  handleStep: (i: number) => void;
}> = (props) => {
  return (
    <div className="flex  w-[100%] ">
      <section className="w-[74%]">
        <HeaderFormRegister src={Step1} alt="passo 1" />
        <BodyFirstStepDonator {...props} />
        <FooterFormAccces />
      </section>
      <DivPurple />
    </div>
  );
};

export default FisrtStepDonator;
