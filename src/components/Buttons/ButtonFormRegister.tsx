interface Props {
  text: string;
}

const ButtonFormRegister = ({ text }: Props) => (
  <button
    type="submit"
    className="self-end mt-5 bg-roxo500 rounded-[7px] text-white font-text font-normal text-x4 leading-[25px] px-[112px] py-[11px] mb-[100px]"
  >
    {text}
  </button>
);

export default ButtonFormRegister;
