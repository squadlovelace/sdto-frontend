import { FunctionComponent } from 'react';
import Step2 from '../../../assets/step2.png';
import DivPurple from '../../DivPurple/DivPurple';
import FooterForm from '../FooterForm';
import HeadeForm from '../HeaderForm';

import BodySecondStep from './BodySecondStep';

const FisrtStepDonator: FunctionComponent<{
  handleStep: (i: number) => void;
}> = (props) => {
  return (
    <div className="flex  w-[100%] h-[100vh]">
      <section className="w-[74%]">
        <HeadeForm img={Step2} alt="passo 1" />
        <BodySecondStep {...props} />
        <FooterForm />
      </section>
      <DivPurple />
    </div>
  );
};

export default FisrtStepDonator;
