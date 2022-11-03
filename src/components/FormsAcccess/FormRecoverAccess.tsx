import ButtonFormAccces from '../Buttons/ButtonFormAccces';
import InputFormACcces from './InputFormACcces';
import TextTitle from './TextTitle';

const FormRecoverAccess = () => (
  <section className="pb-[280px]">
    <TextTitle
      title="Recuperação de senha"
      textInfo="Informe os dados abaixo e receba em seu e-mail cadastrado instruções para recuperar seu acesso."
    />
    <form action="get">
      <InputFormACcces
        htmlFor="cpf"
        label="Documento(CPF)"
        placeholder="Digite o seu CPF"
      />
      <InputFormACcces
        htmlFor="cpf"
        label="Documento(CPF)"
        placeholder="Digite o seu CPF"
      />
      <ButtonFormAccces textButton="Continuar" />
    </form>
  </section>
);

export default FormRecoverAccess;
