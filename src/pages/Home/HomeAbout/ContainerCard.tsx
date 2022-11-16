import CardAbout from './CardAbout';

const ContainerCard = () => (
  <div className="flex flex-col gap-[70px] mx-[260px] mb-[126px]">
    <div className="flex gap-[140px]">
      <CardAbout
        title="Quem nós somos?"
        text="Um sistema sem fins lucrativos que pretende centralizar informações sobre todo o processo de doação e transplante de órgãos."
      />
      <CardAbout
        title="Por que fazemos?"
        text="Somos engajados por tornar a esperança de milhares de pessoas, que estão na fila de espera de doação, realidade."
      />
    </div>
    <div className="flex gap-[140px]">
      <CardAbout
        title="Qual o nosso objetivo?"
        text="Ajudar a difundir a doação e transplante de órgãos, como também formar uma comunidade de doadores e pessoas interessadas na temática. "
      />
      <CardAbout
        title="O que fazemos?"
        text="Temos o intúito de incentivar o interesse da população em conhecer o processo de doação e buscar tornar-se um possível doador."
      />
    </div>
  </div>
);

export default ContainerCard;
