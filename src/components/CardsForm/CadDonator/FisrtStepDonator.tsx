import { useCallback, useState } from 'react';

import Step1 from '../../../assets/step1.png';
import ButonStepForm from '../../Buttons/ButonStepForm';
import FooterForm from '../../FooterForm';
import HeadeForm from '../../HeaderForm';
import InputItems from '../Inputs/InputItems';
import InputName from '../Inputs/InputName';

type FormType = {
  cnpj: string;
  razao: string;
  email: string;
  cep: string;
  cidade: string;
  nome: string;
  senha: string;
  rg: string;
  cpf: string;
};

interface Props {
  handleStep: (i: number) => void;
}

const FisrtStepDonator = ({ handleStep }: Props) => {
  const [formState, setFormState] = useState<FormType>({
    cnpj: '',
    razao: '',
    email: '',
    cep: '',
    cidade: '',
    nome: '',
    senha: '',
    rg: '',
    cpf: '',
  });
  const handleFormSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.currentTarget?.value || '',
    });
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { cnpj, razao } = formState;
      if (!cnpj || razao) window.alert('preencha os todos os campos');
      //* substitua o alert por toast, vai deixar o visual mais bonito
    },
    [formState]
  );

  return (
    <div className="flex max-w-max">
      <div className="w-[74%]">
        <HeadeForm img={Step1} alt="passo 1" />
        <div className="globe">
          <div className="container  grid-cols-8 mx-auto pt-5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <InputName
                  textLabel="Nome Completo"
                  placeholder="Digite seu nome"
                  value={formState.nome}
                  onChange={handleFormSubmit}
                />

                <InputItems
                  name="cnpj"
                  type="text"
                  placeholder="Digite o seu email"
                  value={formState.email}
                  textLabel="Email"
                  onChange={handleFormSubmit}
                />

                <InputItems
                  name="cnpj"
                  type="text"
                  placeholder="Digite o seu Email Novamente"
                  value={formState.email}
                  textLabel="Confirmar Email"
                  onChange={handleFormSubmit}
                />

                <InputItems
                  name="senha"
                  type="text"
                  placeholder="Digite sua senha"
                  value={formState.senha}
                  textLabel="Senha"
                  onChange={handleFormSubmit}
                />

                <InputItems
                  name="senha"
                  type="text"
                  placeholder="Repita a sua senha"
                  value={formState.senha}
                  textLabel="Confirmar Senha"
                  onChange={handleFormSubmit}
                />

                <InputItems
                  name="rg"
                  type="text"
                  placeholder="Digite os  números do seu documento de identidade"
                  value={formState.rg}
                  textLabel="RG"
                  onChange={handleFormSubmit}
                />

                <InputItems
                  name="CPF"
                  type="text"
                  placeholder="Digite os  números do seu CPF"
                  value={formState.cpf}
                  textLabel="CPF"
                  onChange={handleFormSubmit}
                />

                <div className="w-full md:w-1/2  pt-2 px-3 grid-cols-8" />
                <ButonStepForm handleStep={() => handleStep(1)} />

                <div className="pt-4 pl-3" />
              </div>
            </form>
          </div>
        </div>

        <FooterForm />
      </div>
      <div className="bg-roxo500 w-[26%] " />
    </div>
  );
};

export default FisrtStepDonator;
