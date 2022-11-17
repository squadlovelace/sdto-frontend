import { useState } from 'react';
import FisrtStepDonator from '../../components/FormRegister/CardFormDonator/FisrtStepDonator';
import SecondStepDonator from '../../components/FormRegister/CardFormDonator/SecondStepDonator';
import ThirdStepDonator from '../../components/FormRegister/CardFormDonator/ThirdStepDonator';

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
