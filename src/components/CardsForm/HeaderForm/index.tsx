import Logo from '../../../assets/LogoForm.png';

interface Props {
  img: string;
  alt: string;
}

const HeadeForm = ({ img, alt }: Props) => (
  <div className="flex-col mt-[30px] ml-[200px] mr-[70px]">
    <div className="flex justify-between ">
      <img src={Logo} alt="Logo do site" className="w-[70px] h-[22px]" />
      <img src={img} alt={alt} />
    </div>
  </div>
);

export default HeadeForm;
