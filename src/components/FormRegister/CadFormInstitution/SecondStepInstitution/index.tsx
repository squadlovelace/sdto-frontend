import React, { FunctionComponent } from 'react';
import Step2 from '../../../../assets/Step2.png';
import DivPurple from '../../../DivPurple/DivPurple';
import FooterFormAccces from '../../../FormsAcccess/FooterFormAccces';
import HeaderFormRegister from '../../HeaderFormRegister';
import BodySecondDonator from './BodySecondDonator';

const SecondStepInstitution: FunctionComponent<{
  handleStep: (i: number) => void;
}> = (props) => {
  return (
    <div className="flex  w-[100%] ">
      <section className="w-[74%]">
        <HeaderFormRegister src={Step2} alt="passo 2" />
        <BodySecondDonator {...props} />
        <FooterFormAccces />
      </section>
      <DivPurple />
    </div>
  );
};

export default SecondStepInstitution;
