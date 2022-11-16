import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import ButtonFormRegister from '../../../Buttons/ButtonFormRegister';
import TextTitle from '../../../TextTitle/TextTitle';
import ArrowLeft from '../../ArrowLeft';
import InputCheckbox from '../../Inputs/InputCheckbox';
import InputName from '../../Inputs/InputName';
import { ColumItemLeft } from './ColumItemThirdLeft';
import ColumItemRight from './ColumItemThirdRight';

const BodyThirdtStepInstitution: FunctionComponent<{
  handleStep: (i: number) => void;
}> = ({ handleStep }) => {
  return (
    <>
      <div onClick={() => handleStep(1)} className="cursor-pointer">
        <ArrowLeft />
      </div>
      <section className="formSteps flex flex-col ">
        <TextTitle
          title="Cadastre-se como um instituição"
          textInfo="Preencha os campos a seguir com as suas informações para cadastrar-se."
        />

        <div className="flex justify-between gap-[50px] mb-[80px]">
          <ColumItemLeft />
          <ColumItemRight />
        </div>

        <div className="grid grid-cols-2 gap-10 mb-[150px]">
          <InputCheckbox
            htmlFor="termServices"
            textLabel="Ao clicar nesse botão você concorda com os nossos Termos e Serviços"
          />

          <ButtonFormRegister
            text="Finalizar Cadastro"
            type="button"
            handleStep={() => handleStep(1)}
          />
        </div>
      </section>
    </>
  );
};

export default BodyThirdtStepInstitution;
