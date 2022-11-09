interface Props {
  handleStep: () => void;
}

const ButonStepForm = ({ handleStep }: Props) => (
  <button
    type="button"
    onClick={handleStep}
    className="flex flex-row justify-center items-center px-2 py-3 gap-2 w-80 h-12 bg-roxo65 rounded-xl font-text font-normal text-x2 text-white bg-roxo500 mt-10"
  >
    Avançar e Continuar
  </button>
);

export default ButonStepForm;
