import ButtonFormAccces from '../Buttons/ButtonFormAccces';
import InputFormACcces from './InputFormACcces';
import TextTitle from '../TextTitle/TextTitle';
import { SetStateAction, useContext, useState } from 'react';
import { authContext } from '../../contexts/auth/authContext';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';

export const SectionFormInfo = () => {
  const auth = useContext(authContext);
  const navigate = useNavigate();
  const api = useApi();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: any) => {
    event.preventDefault();

    if (cpf && password) {
      const data = await api.signin(cpf, password);

      if (data.token) {
        localStorage.setItem('@user', JSON.stringify(data));
        navigate('/');
      } else {
        alert('Algo deu errado!');
      }
    }
  };

  return (
    <section>
      <TextTitle
        title="Bem vindo de volta!"
        textInfo="Faça o login na sua conta para acessar o sistema"
      />
      <form className="mb-[230px]" onSubmit={handleLogin}>
        <InputFormACcces
          htmlFor="cpf"
          label="CPF"
          placeholder="Digite o seu CPF"
          value={cpf}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setCpf(e.target.value)
          }
        />
        <InputFormACcces
          htmlFor="password"
          label="Senha"
          placeholder="Digite a sua senha"
          value={password}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setPassword(e.target.value)
          }
        />
        <div className="flex justify-between font-text font-semibold text-x2  text-center mb-[70px] text-roxo800">
          <div className="flex">
            <label htmlFor="connected">
              <input
                type="checkbox"
                name="connected"
                id="connected"
                className="mr-[10px] w-4 h-4 my-auto"
              />
              Manter-se conectado
            </label>
          </div>
          <span>Esqueceu a senha?</span>
        </div>
        <ButtonFormAccces onClick={handleLogin} textButton="Entrar" />
      </form>
    </section>
  );
};

export default SectionFormInfo;
