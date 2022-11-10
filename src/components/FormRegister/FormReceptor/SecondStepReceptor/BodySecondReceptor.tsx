import { FunctionComponent } from 'react';
import ButtonFormRegister from '../../../Buttons/ButtonFormRegister';
import TextTitle from '../../../TextTitle/TextTitle';
import ArrowLeft from '../../ArrowLeft';
import InputName from '../../Inputs/InputName';
import ColumItemLeftSecondStep from './ColumItemLeftSecondStep';
import ColumItemRightSecondStep from './ColumItemRightSecondStep';

const BodySecondReceptor: FunctionComponent<{
  handleStep: (i: number) => void;
}> = ({ handleStep }) => {
  return (
    <>
      <div onClick={() => handleStep(0)} className="cursor-pointer">
        <ArrowLeft />
      </div>
      <section className="formSteps flex flex-col">
        <TextTitle
          title="Cadastre-se como um receptor"
          textInfo="Preencha os campos a seguir com as suas informações da instituição que deseja doar"
        />
          <InputName
          htmlFor="Name"
          placeholder="Digite o seu nome completo"
          textLabel="Nome"
        />
        <div className="flex justify-between gap-[50px] ">
          <ColumItemLeftSecondStep />
          <ColumItemRightSecondStep />
        </div>
        <ButtonFormRegister
          text="Confirmar e continuar"
          type="button"
          handleStep={() => handleStep(2)}
        />
      </section>
    </>
  );
};

export default BodySecondReceptor;
