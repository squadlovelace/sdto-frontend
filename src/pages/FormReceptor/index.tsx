import { useState } from 'react';
import FirstStepReceptor from '../../components/FormRegister/FormReceptor/FirstStepReceptor';
import SecondStepReceptor from '../../components/FormRegister/FormReceptor/SecondStepReceptor';
import ThirdStepReceptor from '../../components/FormRegister/FormReceptor/ThirdStepReceptor';



const FormReceptor = () => {
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
      {step === 'fisrt' && <FirstStepReceptor handleStep={handleStep} />}
      {step === 'second' && <SecondStepReceptor handleStep={handleStep} />}
      {step === 'third' && <ThirdStepReceptor handleStep={handleStep} />}
    </>
  );
};

export default FormReceptor;