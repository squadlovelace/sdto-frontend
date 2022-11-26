interface Props {
  text: string;
  onClick: any;
}

const ButtonFormRegister = ({ text, onClick }: Props) => (
  <button
    type="submit"
    onClick={onClick}
    className="self-end mt-5 bg-roxo500 rounded-[7px] text-white font-text font-normal text-x4 leading-[25px] px-[112px] py-[11px] mb-[100px]"
  >
    {text}
  </button>
);

export default ButtonFormRegister;
