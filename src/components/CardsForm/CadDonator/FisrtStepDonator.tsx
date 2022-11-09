import { FunctionComponent } from 'react';
import Step1 from '../../../assets/step1.png';
import DivPurple from '../../DivPurple/DivPurple';
import FooterForm from '../FooterForm';
import HeadeForm from '../HeaderForm';

import BodyFirstStep from './BodyFirstStep';

const FisrtStepDonator: FunctionComponent<{
  handleStep: (i: number) => void;
}> = (props) => {
  return (
    <div className="flex  w-[100%] h-[100vh]">
      <section className="w-[74%]">
        <HeadeForm img={Step1} alt="passo 1" />
        <BodyFirstStep {...props} />
        <FooterForm />
      </section>
      <DivPurple />
    </div>
  );
};

export default FisrtStepDonator;
