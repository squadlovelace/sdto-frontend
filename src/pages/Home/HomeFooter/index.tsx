import ContainerTeam from './ContainerTeam';

const HomeFooter = () => (
  <div
    className="bg-roxo500  flex flex-col items-center pb-[84px]"
    id="quemsomos"
  >
    <h1 className="font-normal font-body text-x3 leading-8 text-center text-white pt-[70px] w-[500px] mb-[18px]">
      Sistema desenvolvido pelo
      <span className="font-bold">Lovelace Squad </span>
      através do Atlântico Bootcamp :
    </h1>
    <ContainerTeam />
  </div>
);

export default HomeFooter;
