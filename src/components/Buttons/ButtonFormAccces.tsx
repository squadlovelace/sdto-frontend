interface Props {
  textButton: string;
}

const ButtonFormAccces = ({ textButton }: Props) => (
  <button
    type="button"
    className="h-12 bg-roxo500 rounded-lg font-text font-normal text-x4 leading-[25px] text-white w-[100%]"
  >
    {textButton}
  </button>
);

export default ButtonFormAccces;
