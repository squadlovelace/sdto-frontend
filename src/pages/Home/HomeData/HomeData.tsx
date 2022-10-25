import icon01 from '../../../assets/icon-data1.png';
import icon02 from '../../../assets/icon-data2.png';
import icon03 from '../../../assets/icon-data3.png';
import icon04 from '../../../assets/icon-data4.png';
import ilustrationData from '../../../assets/ilustration-data.png';
import ContainerData from './ContainerData';

const HomeData = () => (
  <section className="flex my-180 mx-231 gap-10 items-center">
    <div className="flex flex-col gap-35">
      <ContainerData
        src={icon01}
        alt="iconne grafico"
        text="O Brasil é o 2º maior transplantador do mundo, atrás apenas dos EUA."
      />
      <ContainerData
        src={icon02}
        alt="iconne hospital"
        text="O Brasil possui mais de 600 hospitais de transplantes autorizados."
      />
      <ContainerData
        src={icon03}
        alt="iconne parar"
        text="A taxa de doação é diretamente afetada devido a recusa de permisssão familiar."
      />
      <ContainerData
        src={icon04}
        alt="iconne fila de pessoas"
        text="Mais de 59 mil pessoas estão na fila de espera por um órgão."
      />

      <p className="font-text text-x2 leading-5 text-roxo800">
        <span className="font-bold">Fonte:</span> Diário do Nordeste, Ministério
        da Saúde
      </p>
    </div>
    <img
      src={ilustrationData}
      alt="simbolo de doação de orgãos"
      width="530px"
      className="h-376"
    />
  </section>
);

export default HomeData;
