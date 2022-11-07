import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';
import ButtonPrimaty from '../Buttons/ButtonPrimaty';
import ButtonSecondary from '../Buttons/ButtonSecondary';
import LiNavbar from '../LiNavbar';

export function Header() {
  return (
    <header className="bg-roxo500 sticky top-0 z-30 w-full ">
      <nav className="flex justify-between mx-200px  h-22 items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-5.5" />
        </Link>
        <ul className="flex flex-row gap-8 h-4.8 ">
          <LiNavbar href="#saibamais" textLink="Saiba Mais" />
          <LiNavbar href="#sobre" textLink="Sobre" />
          <LiNavbar href="#quemsomos" textLink="Quem somos" />
          <div className="flex flex-row items-center gap-8">
            <ButtonPrimaty>
              <Link to="register">Cadastrar</Link>
            </ButtonPrimaty>
            <ButtonSecondary>
              <Link to="login">Entrar</Link>
            </ButtonSecondary>
          </div>
        </ul>
      </nav>
    </header>
  );
}
