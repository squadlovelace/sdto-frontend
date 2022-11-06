import IlustracaoHome from '../../../assets/ilustracao-home.png';

const HomeTitle = () => (
  <section className="bg-roxo500 h-184 flex justify-center gap-16 items-center ">
    <img
      src={IlustracaoHome}
      alt="Ilustração Home"
      className="h-111"
      width="493.82px"
    />
    <div className="text-white">
      <h1 className="font-body max-w-2xl font-bold text-x9 leading-x4.5 text-white mb-3">
        Quantas vidas são salvas por um sim?
      </h1>
      <p className="font-text font-normal max-w-2xl text-x2 leading-6.5 text-justify text-white">
        Na maioria das vezes, o transplante de órgãos pode ser a única esperança
        de vida ou a oportunidade de um recomeço para as pessoas que precisam da
        doação. Todos os anos, milhares de vidas são salvas por meio desse
        gesto.
      </p>
    </div>
  </section>
);

export default HomeTitle;
