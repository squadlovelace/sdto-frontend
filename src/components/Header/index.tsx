import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';
import ButtonPrimaty from '../Buttons/ButtonPrimaty';
import ButtonSecondary from '../Buttons/ButtonSecondary';

export function Header() {
  return (
    <header className="bg-roxo65">
      <nav className="flex justify-between mx-32  h-18">
        <div className="my-auto">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="flex gap-14 my-auto font-text font-bold text-x4 items-center capitalize text-white leading-5">
          <li>
            <Link to="/saibamais">Saiba Mais</Link>
          </li>
          <li>
            <Link to="quemsomos">Quem somos</Link>
          </li>
          <li>
            <ButtonPrimaty>Cadastrar</ButtonPrimaty>
          </li>
          <li>
            <ButtonSecondary>Entrar</ButtonSecondary>
          </li>
        </ul>
      </nav>
    </header>
  );
}
