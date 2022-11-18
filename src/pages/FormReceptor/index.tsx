import { useState } from 'react';
import FisrtStepReceptor  from '../PagesFormReceptor/FisrtStepReceptor';
import SecondStepReceptor  from '../PagesFormReceptor/SecondStepReceptor';
import ThirdStepReceptor from '../PagesFormReceptor/ThirdStepReceptor';

const FormReceptor = () => {
  const steps = [1, 2, 3];
  const [step, setStep] = useState(steps[0]);
  const handleStep = (i: number) => {
    setStep(steps[i]);
  };

  return (
    <>
      {step === 1 && <FisrtStepReceptor handleStep={handleStep} />}
      {step === 2 && <SecondStepReceptor handleStep={handleStep} />}
      {step === 3 && <ThirdStepReceptor handleStep={handleStep} />}
    </>
  );
};

export default FormReceptor;