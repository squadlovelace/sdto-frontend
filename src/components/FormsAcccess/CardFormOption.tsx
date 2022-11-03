import ArrowRight from '../../assets/ArrowRight.png';

interface Props {
  TitleSituation: string;
  textSituation: string;
  src: string;
  alt: string;
}

const CardFormOption = ({ TitleSituation, textSituation, src, alt }: Props) => (
  <div className="flex justify-between border-solid border-[1px] border-[#dbdbdb] rounded-[7px] pl-10 pr-5 py-[30px] items-center ">
    <div className="flex  gap-10 items-center">
      <img src={src} alt={alt} />
      <div>
        <h3 className="font-body font-semibold text-x4 leading-[25px] text-roxo800 mb-1">
          {TitleSituation}
        </h3>
        <p className="w-[250px] h-[40px] font-text text-[14px] leading-5 text-roxo500">
          {textSituation}
        </p>
      </div>
    </div>
    <img
      src={ArrowRight}
      alt="flecha apontando para direita"
      width="24px"
      className="h-[24px]"
    />
  </div>
);

export default CardFormOption;
