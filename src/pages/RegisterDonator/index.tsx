import { useState } from 'react';

import FisrtStepDonator from '../../components/CardsForm/CadDonator/FisrtStepDonator';
import SecondSteoDonator from '../../components/CardsForm/CadDonator/SecondSteoDonator';
import ThirdDonator from '../../components/CardsForm/CadDonator/ThirdStepDonator';

const RegisterDonator = () => {
  const steps = [
    { id: 1, name: 'fisrt' },
    { id: 2, name: 'second' },
    { id: 3, name: 'third' },
  ];
  const [step, setStep] = useState(steps[0].name);

  const handleStep = () => {
    setStep(steps[1].name);
  };

  return (
    <>
      {step === 'fisrt' && <FisrtStepDonator handleStep={handleStep} />}
      {step === 'second' && <SecondSteoDonator handleStep={handleStep} />}
      {step === 'third' && <ThirdDonator handleStep={handleStep} />}
    </>
  );
};

export default RegisterDonator;