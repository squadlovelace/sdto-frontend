import ButtonFormAccces from '../Buttons/ButtonFormAccces';
import InputFormACcces from './InputFormACcces';
import TextTitle from './TextTitle';

const SectionFormInfo = () => (
  <section>
    <TextTitle
      title="Bem vindo de volta!"
      textInfo="Faça o login na sua conta para acessar o sistema"
    />
    <form action="get" className="mb-[230px]">
      <InputFormACcces
        htmlFor="cpf"
        label="CPF"
        placeholder="Digite o seu CPF"
      />
      <InputFormACcces
        htmlFor="password"
        label="Senha"
        placeholder="Digite a sua senha"
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
      <ButtonFormAccces textButton="Entrar" />
    </form>
  </section>
);

export default SectionFormInfo;
