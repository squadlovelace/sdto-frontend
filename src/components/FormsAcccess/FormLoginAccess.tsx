import { Checkbox, FormControlLabel } from '@mui/material';

import ButtonFormAccces from '../Buttons/ButtonFormAccces';
import InputFormACcces from './InputFormACcces';
import TextTitle from './TextTitle';

const SectionFormInfo = () => (
  <section>
    <TextTitle
      title="Bem vindo de volta!"
      textInfo="Faça o login na sua conta para acessar o sistema"
    />
    <form action="get">
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
      <div>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <span>Esqueceu a senha?</span>
      </div>
      <ButtonFormAccces textButton="Entrar" />
    </form>
  </section>
);

export default SectionFormInfo;
