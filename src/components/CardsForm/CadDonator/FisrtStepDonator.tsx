interface Props {
  handleStep: () => void;
}

const FisrtStepDonator = ({ handleStep }: Props) => (
  <div>
    <button type="submit" onClick={handleStep}>
      ir paro o passo 2
    </button>
  </div>
);

export default FisrtStepDonator;
