interface Props {
  handleStep: () => void;
}

const ThirdDonator = ({ handleStep }: Props) => (
  <div>
    <button type="submit" onChange={handleStep}>
      passo2
    </button>
  </div>
);

export default ThirdDonator;
