interface Props {
  handleStep: () => void;
}

const SecondSteoDonator = ({ handleStep }: Props) => (
  <div>
    <button type="submit" onClick={handleStep}>
      Segundo Passo
    </button>
  </div>
);

export default SecondSteoDonator;
