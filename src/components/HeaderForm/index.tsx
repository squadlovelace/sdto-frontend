import Logo from '../../assets/LogoForm.png';

interface Props {
  img: string;
  alt: string;
}

const HeadeForm = ({ img, alt }: Props) => (
  <div className="flex justify-between">
    <img src={Logo} alt="Logo do site" />
    <img src={img} alt={alt} />
  </div>
);

export default HeadeForm;
