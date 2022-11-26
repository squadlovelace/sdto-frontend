import { Link } from 'react-router-dom';

import Donator from '../../assets/donator.png';
import Instituition from '../../assets/institution.png';
import Receiver from '../../assets/receiver.png';
import TextTitle from '../TextTitle/TextTitle';
import CardFormOption from './CardFormOption';

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
        path="/formintituicao/firststep"
        alt="formulário de cadastro"
        url="/formintituicao/firststep"
      />
      <CardFormOption
        TitleSituation="Sou um receptor"
        textSituation="Clique aqui para se cadastrar como um receptor "
        src={Receiver}
        path="/formreceptor/firststep"
        alt="caixa de orgãos"
        url="/formreceptor/firststep"
      />
      <CardFormOption
        TitleSituation="Sou um doador"
        textSituation="CLique aqui para se cadastrar como um doador "
        src={Donator}
        path="/formdonator/firststep"
        alt="mãos segurando um coração"
        url="/formdonator/firststep"
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
