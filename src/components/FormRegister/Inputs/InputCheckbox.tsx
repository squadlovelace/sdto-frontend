interface Props {
  htmlFor: string;
  textLabel: string;
}

const InputCheckbox = ({ htmlFor, textLabel }: Props) => {
  return (
    <div className="flex gap-3 mt-[20px] ">
      <input
        type="checkbox"
        id={htmlFor}
        name={htmlFor}
        value={htmlFor}
        className="h-8 w-8"
      />
      <label
        htmlFor={htmlFor}
        className="font-text font-bold text-x2 leading-5 text-roxo800"
      >
        {textLabel}
      </label>
    </div>
  );
};

export default InputCheckbox;
