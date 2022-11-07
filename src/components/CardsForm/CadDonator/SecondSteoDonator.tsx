interface Props {
  handleStep: (i: number) => void;
}

const SecondSteoDonator = ({ handleStep }: Props) => (
  <div>
    <button type="submit" onClick={() => handleStep(1)}>
      Terceiro Passo
    </button>
  </div>
);

export default SecondSteoDonator;
