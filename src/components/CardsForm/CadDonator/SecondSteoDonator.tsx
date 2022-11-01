interface Props {
  handleStep: () => void;
}

const SecondSteoDonator = ({ handleStep }: Props) => (
  <div>
    <button type="submit" onClick={handleStep}>
      segundo
    </button>
  </div>
);

export default SecondSteoDonator;
