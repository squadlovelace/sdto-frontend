interface Props {
  textButton: string;
  onClick: any;
}

const ButtonFormAccces = ({ textButton, onClick }: Props) => (
  <button
    type="button"
    className="h-12 bg-roxo500 rounded-lg font-text font-normal text-x4 leading-[25px] text-white w-[100%]"
    onClick={onClick}
  >
    {textButton}
  </button>
);

export default ButtonFormAccces;
