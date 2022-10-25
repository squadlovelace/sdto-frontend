import CardLinks from './CardLinks';
import ContainerInfos from './ContainerInfos';

const HomeActions = () => (
  <section className="bg-roxo800">
    <div className="flex flex-col items-center mx pt-30">
      <h1 className="font-body font-bold text-x6.5 leading-50 text-white text-center mb-15">
        Perguntas Fequentes
      </h1>
      <ContainerInfos />
      <CardLinks />
    </div>
  </section>
);

export default HomeActions;
