import { useState } from 'react';
import FisrtStepDonator from '../../components/FormRegister/CardFormDonator/FisrtStepDonator';
import SecondStepDonator from '../../components/FormRegister/CardFormDonator/SecondStepDonator';
import ThirdStepDonator from '../../components/FormRegister/CardFormDonator/ThirdStepDonator';

const FormDonator = () => {
  const steps = [
    { id: 1, name: 'fisrt' },
    { id: 2, name: 'second' },
    { id: 3, name: 'third' },
  ];
  const [step, setStep] = useState(steps[0].name);
  const handleStep = (i: number) => {
    setStep(steps[i].name);
  };

  return (
    <>
      {step === 'fisrt' && <FisrtStepDonator handleStep={handleStep} />}
      {step === 'second' && <SecondStepDonator handleStep={handleStep} />}
      {step === 'third' && <ThirdStepDonator handleStep={handleStep} />}
    </>
  );
};

export default FormDonator;
