import FormDoador2 from "./formD2";

interface Props {
  handleStep: () => void;
}

const SecondSteoDonator = ({ handleStep }: Props) => (
  <div>
    <button type="submit" onClick={handleStep}>
      <FormDoador2></FormDoador2>
      
    </button>
  </div>
);

export default SecondSteoDonator;
