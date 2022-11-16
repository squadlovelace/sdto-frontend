import { Link } from 'react-router-dom';
import Logo from '../../assets/logoFormAccess.png';

interface Props {
  src: string;
  alt: string;
}

const HeaderFormRegister = ({ src, alt }: Props) => {
  return (
    <header className="flex justify-between mt-[30px] ml-[200px] mr-[70px] mb-[30px]">
      <Link to="/">
        <img src={Logo} alt="logo do site" className="w-[70px] h-[22px]" />
      </Link>
      <img src={src} alt={alt} />
    </header>
  );
};

export default HeaderFormRegister;
