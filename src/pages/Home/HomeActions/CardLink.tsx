import ButtonCard from '../../../components/Buttons/ButtonCard';

/* eslint-disable react/require-default-props */
interface Props {
  img: string;
  text: string;
  link: string;
  alt: string;
  cardInstitution?: string;
  path: string;
}

const CardLink = ({ img, text, alt, link, cardInstitution, path }: Props) => (
  <div className="h-360 w-260 rounded-lg	 bg-roxo500">
    <div className={`bg-white h-200 rounded-t-lg	mx-auto ${cardInstitution} `}>
      <img
        src={img}
        height="190px"
        alt={alt}
        className={`mx-auto even:bg-red-500 `}
      />
    </div>
    <div className="flex flex-col gap-[18px] my-5 mx-7">
      <p className="font-body font-extrabold text-[20px] leading-7 text-white">
        {text}
      </p>
      <ButtonCard>{link}</ButtonCard>
    </div>
  </div>
);

export default CardLink;
