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

  const handleStep = (i: number) => {
    setStep(steps[i].name);
  };
  const handleStepTwo = () => {
    setStep(steps[1].name);
  };
  const handleStepoTree = () => {
    setStep(steps[2].name);
  };

  return (
    <>
      {step === 'fisrt' && <FisrtStepDonator handleStep={handleStep} />}
      {step === 'second' && <SecondSteoDonator handleStep={handleStepTwo} />}
      {step === 'third' && <ThirdDonator handleStep={handleStepoTree} />}
    </>
  );
};

export default RegisterDonator;
