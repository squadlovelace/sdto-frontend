interface Props {
  handleStep: (i: number) => void;
}

const ThirdDonator = ({ handleStep }: Props) => (
  <div>
    <button type="submit" onChange={() => handleStep(1)}>
      ir para o passo2
    </button>
  </div>
);

export default ThirdDonator;
