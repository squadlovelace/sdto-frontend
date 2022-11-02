interface Props {
  textButton: string;
}

const ButtonFormAccces = ({ textButton }: Props) => (
  <button type="button">{textButton}</button>
);

export default ButtonFormAccces;
