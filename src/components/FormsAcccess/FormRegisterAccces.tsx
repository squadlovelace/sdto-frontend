import { Link } from 'react-router-dom';

import Donator from '../../assets/donator.png';
import Instituition from '../../assets/institution.png';
import Receiver from '../../assets/receiver.png';
import CardFormOption from './CardFormOption';
import TextTitle from '../TextTitle/TextTitle';

const FormRegisterAccces = () => (
  <section className="ml-[200px] mr-[180px] mb-[70px]">
    <TextTitle
      title="Conte-nos qual é a sua situação:"
      textInfo="Queremos ajudar a difundir a doação e transplante de órgãos e formar uma rede de doadores e pessoas interessadas na temática."
    />

    <div className="flex flex-col gap-6 mb-[45px]">
      <CardFormOption
        TitleSituation="Sou uma instituição"
        textSituation="Clique aqui para se cadastrar como uma instituição"
        src={Instituition}
        alt="formulário de cadastro"
      />
      <CardFormOption
        TitleSituation="Sou um receptor"
        textSituation="Clique aqui para se cadastrar como um receptor "
        src={Receiver}
        alt="caixa de orgãos"
      />
      <CardFormOption
        TitleSituation="Sou um doador"
        textSituation="CLique aqui para se cadastrar como um doador "
        src={Donator}
        alt="mãos segurando um coração"
      />
    </div>
    <Link to="/login">
      <p className="font-text font-normal text-[14px] leading-5 text-roxo800 underline">
        Já tem uma conta? Entre
      </p>
    </Link>
  </section>
);

export default FormRegisterAccces;
