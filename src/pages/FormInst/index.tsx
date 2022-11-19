import { useState } from 'react';
import FisrtStepInst from '../PagesFormInst/FirstStepInst';
import SecondStepInst from '../PagesFormInst/SecondStepInst';
import ThirdStepInst from '../PagesFormInst/ThirdStepInst';


const FormInst = () => {
  const steps = [1, 2, 3];
  const [step, setStep] = useState(steps[0]);
  const handleStep = (i: number) => {
    setStep(steps[i]);
  };

  return (
    <>
      {step === 1 && <FisrtStepInst handleStep={handleStep} />}
      {step === 2 && <SecondStepInst handleStep={handleStep} />}
      {step === 3 && <ThirdStepInst handleStep={handleStep} />}
    </>
  );
};

export default FormInst;