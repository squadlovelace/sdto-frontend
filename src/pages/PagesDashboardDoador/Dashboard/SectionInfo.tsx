import family from '../../../assets/family.png';
import Paragraph from './Paragraph';

const SectionInfo = () => (
  <div className="mt-[140px] flex flex-col flex-1 pr-[225px]">
    <h1 className="border-b boder-[#bdbdbd] font-inter font-bold text-[18px] leading-[28px] text-roxo800 pb-[22px]">
      COMO DOAR UM ORGÃO EM VIDA?
    </h1>
    <div>
      <div className="mt-[70px] flex gap-[15px] mb-[10px]">
        <div className="w-10 h-10 bg-roxo500 rounded-[50%] flex justify-center items-center">
          <img src={family} alt="familia" />
        </div>
        <h3 className="font-text font-bold text-[20px] leading-[28px] text-roxo500">
          Autorização familiar
        </h3>
      </div>
      <div className="flex flex-col gap-[10px]">
        <Paragraph>
          No Brasil, a retirada de órgãos só pode ser realizada após a
          autorização familiar. Assim, mesmo que uma pessoa tenha dito em vida
          que gostaria de ser doador, a doação só acontece se a família
          autorizar. Caso não possua familiares, a doação só ocorre mediante
          autorização judicial.
        </Paragraph>
        <Paragraph>
          A melhor maneira de garantir efetivamente que a vontade do doador seja
          respeitada, é fazer com que a família saiba sobre do desejo de doar do
          parente falecido. Na maioria das vezes os familiares atendem a esse
          desejo, por isso a informação e o diálogo são absolutamente
          fundamentais, essenciais e necessários. Não é preciso registrar a
          intenção de ser doador em cartórios, nem informar em documentos o
          desejo de doar, mas sua família precisa saber sobre o seu desejo de se
          tornar um doador após a morte, para que possa autorizar a efetivação
          da doação.
        </Paragraph>
        <Paragraph>
          A plataforma SDTO funciona como um meio de um doador expressar sua
          vontade de doar órgãos. Após realizado o cadastro, seu desejo de doar
          órgãos é manifestado e a plataforma assegura que entrará em contato
          com os responsáveis do usuário, afim de obter a autorização familiar.
        </Paragraph>
      </div>
    </div>
  </div>
);

export default SectionInfo;
