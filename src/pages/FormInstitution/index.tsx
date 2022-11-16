import { useState } from 'react';
import ThirdStepInstituition from '../../components/FormRegister/CadFormInstitution/ThirdStepInstitution';
import SecondStepInstituition from '../../components/FormRegister/CadFormInstitution/SecondStepInstitution';
import FirstStepInstituition from '../../components/FormRegister/CadFormInstitution/FirstStepInstitution';



const FormInstituition = () => {
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
      {step === 'fisrt' && <FirstStepInstituition handleStep={handleStep} />}
      {step === 'second' && <SecondStepInstituition handleStep={handleStep} />}
      {step === 'third' && <ThirdStepInstituition handleStep={handleStep} />}
    </>
  );
};

export default FormInstituition;
