import iconMinus from '../../../assets/btn-minus.png';
import iconPlus from '../../../assets/btn-plus.png';
import ContainerInfo from './ContainerInfo';

const ContainerInfos = () => (
  <div className="flex flex-col gap-5 mb-32 mx-340">
    <ContainerInfo
      title="Quero ser doador. O que faço?"
      text="A primeira coisa a fazer é informar a sua família sobre a sua vontade, pois, após a sua morte, os familiares podem autorizar a doação e retirada dos órgãos e tecidos.
      Mesmo que uma pessoa tenha dito em vida que gostaria de ser doador, a doação só acontece se a família autorizar.  Após a morte encefálica, a família é entrevistada por uma equipe de profissionais da saúde, informando-os sobre o processo de doação e transplante e solicitação do consentimento para doação."
      iconplus={iconPlus}
      altPlus="icone mais"
      iconMinus={iconMinus}
      altMInus="icone menos"
    />
    <ContainerInfo
      title="Quais as restrições para doar?"
      text="Portadores de doenças infectocontagiosas, como soropositivos ao HIV, hepatites B e C, Doença de Chagas, entre outras.
      Pessoas com doenças degenerativas crônicas ou tumores malignos.
      Pacientes em coma ou que tenham sepse ou insuficiência de múltiplos órgãos e sistemas (IMOS)."
      iconplus={iconPlus}
      altPlus="icone mais"
      iconMinus={iconMinus}
      altMInus="icone menos"
    />
    <ContainerInfo
      title="Como ocorre o processo para receber orgãos?"
      text="Nestes casos, o médico faz uma indicação se precisa de transplante de órgãos e/ou tecidos. Já a inscrição na fila de espera é feita a partir de equipes de referência credenciadas pelo Ministério da Saúde, via Sistema Nacional de Transplantes. Os receptores são separados por órgãos, tipos sanguíneos e outras especificações técnicas. Esta lista única apresenta uma ordem cronológica de inscrição, sendo os receptores selecionados nessa ordem, em função da gravidade ou compatibilidade sangüínea e genética com o doador. Portanto, a distribuição de órgãos não é somente pelo tempo de inscrição na fila, depende de diversos critérios específicos. A existência desta lista única assegura a seriedade e a transparência de todo o processo."
      iconplus={iconPlus}
      altPlus="icone mais"
      iconMinus={iconMinus}
      altMInus="icone menos"
    />
  </div>
);

export default ContainerInfos;
