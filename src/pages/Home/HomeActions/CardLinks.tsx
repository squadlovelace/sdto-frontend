import iconACtion1 from '../../../assets/icon-action-1.png';
import iconACtion2 from '../../../assets/icon-action-2.png';
import iconACtion3 from '../../../assets/icon-action-3.png';
import CardLink from './CardLink';

const CardLinks = () => (
  <div className="flex gap-108 mb-[200px]">
    <CardLink
      img={iconACtion1}
      alt="icone de uma mão segurando um coração"
      text="Está interessado em doar orgãos?"
      link="Cadastrar-se"
    />

    <CardLink
      img={iconACtion3}
      alt="icone de mão segurando uma caixa com documentos de doações"
      text="Procura doadores pra sua instituição?"
      link="Cadastrar-se"
      cardInstitution="cardImg"
    />

    <CardLink
      img={iconACtion2}
      alt="icone de um orgão e um documento de doação"
      text="Legislação brasileira de doação de órgãos"
      link="Saiba Mais"
    />
  </div>
);

export default CardLinks;
