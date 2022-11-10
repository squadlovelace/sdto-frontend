import { FunctionComponent } from 'react';
import ButtonFormRegister from '../../../Buttons/ButtonFormRegister';
import TextTitle from '../../../TextTitle/TextTitle';
import ArrowLeft from '../../ArrowLeft';
import ColumItemLeftSecondStep from './ColumItemLeftSecondStep';
import ColumItemRightSecondStep from './ColumItemRightSecondStep';

const BodySecondDonator: FunctionComponent<{
  handleStep: (i: number) => void;
}> = ({ handleStep }) => {
  return (
    <>
      <div onClick={() => handleStep(0)} className="cursor-pointer">
        <ArrowLeft />
      </div>
      <section className="formSteps flex flex-col">
        <TextTitle
          title="Cadastre-se como um doador"
          textInfo="Preencha os campos a seguir com as suas informações para cadastrar-se."
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

export default BodySecondDonator;
