interface Props {
  title: string;
  text: string;
}
const CardAbout = ({ title, text }: Props) => (
  <div>
    <h3 className="font-text font-bold text-[25px] leading-[35px] text-roxo800">
      {title}
    </h3>
    <p className="font-text font-normal text-x4 leading-[25px] max-w-sm text-roxo800">
      {text}
    </p>
  </div>
);

export default CardAbout;
