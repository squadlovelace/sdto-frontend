interface Props {
  src: string;
  alt: string;
  text: string;
}

const ContainerData = ({ src, alt, text }: Props) => (
  <div className="flex items-center gap-x-17 ">
    <img src={src} alt={alt} width="116px" />
    <p className="font-text max-w-xs font-semibold text-x3 leading-5.5 text-roxo500">
      {text}
    </p>
  </div>
);

export default ContainerData;
