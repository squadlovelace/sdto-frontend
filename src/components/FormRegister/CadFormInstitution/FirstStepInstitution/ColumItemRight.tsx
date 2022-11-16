import InputItem from '../../Inputs/InputItem';

const ColumItemRight = () => {
  return (
    <div className="flex flex-col flex-1">
      <InputItem
        htmlFor="comfirmEmail"
        placeholder="Digite o seu e-mail novamente"
        textLabel="Confirmar E-mail"
      />
      <InputItem
        htmlFor="comfirmPassword"
        placeholder="Digite a sua senha novamente"
        textLabel="Confirmar Senha"
      />
      <InputItem
        htmlFor="cpf"
        placeholder="Digite os digitos do seu CPF"
        textLabel="CPF"
      />
    </div>
  );
};

export default ColumItemRight;
