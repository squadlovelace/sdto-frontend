import { useState } from 'react';
import FisrtStepDonator from '../PagesFormDonator/FisrtStepDonator';
import SecondStepDonator from '../PagesFormDonator/SecondStepDonator';
import ThirdStepDonator from '../PagesFormDonator/ThirdStepDonator';

const FormDonator = () => {
  const steps = [1, 2, 3];
  const [step, setStep] = useState(steps[0]);
  const handleStep = (i: number) => {
    setStep(steps[i]);
  };

  return (
    <>
      {step === 1 && <FisrtStepDonator handleStep={handleStep} />}
      {step === 2 && <SecondStepDonator handleStep={handleStep} />}
      {step === 3 && <ThirdStepDonator handleStep={handleStep} />}
    </>
  );
};

export default FormDonator;
