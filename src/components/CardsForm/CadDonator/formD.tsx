import React, { useCallback, useState } from 'react';

import FormDoador2 from './formD2';

interface IFormState {
  cnpj: string;
  razao: string;
  email: string;
  cep: string;
  cidade: string;
  nome: string;
  senha: string;
  rg: string;
  cpf: string;
}

const FormDoador = () => {
  const [formState, setFormState] = useState<IFormState>({
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

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { cnpj, razao } = formState;
      if (!cnpj || razao) window.alert('preencha os todos os campos');
    },
    [formState]
  );

  const steps = [
    { id: 1, name: 'fisrt' },
    { id: 2, name: 'second' },
    { id: 3, name: 'third' },
  ];

  const [step, setStep] = useState(steps[0].name);

  const getStep = () => {
    setStep(steps[1].name);
  };

  return (
    <>
      {step === 1 ? (
        <div className="globe">
          <div className="container  grid-cols-8 mx-auto pt-5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0 pt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Nome Completo</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    name=""
                    id="grid-first-name"
                    type="text"
                    value={formState.nome}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        nome: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Email</p>
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name="cnpj"
                    placeholder="Digite Seu Email"
                    value={formState.email}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        email: event.currentTarget?.value || '',
                      })
                    }
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Confirmar Email</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Digite Seu Email Novamente"
                  />
                </div>
                <div className="w-full md:w-1/2 pt-4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Senha</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={formState.senha}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        senha: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="Digite o CEP"
                  />
                </div>
                <div className="w-full md:w-1/2  pt-4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Confirmar Senha</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Digite a cidade onde localiza-se a instituição"
                  />
                </div>

                <div className="w-full md:w-1/2 pt-4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>RG</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={formState.rg}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        rg: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="Digite rua,número e bairro"
                  />
                </div>

                <div className="w-full md:w-1/2  pt-4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>CPF</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={formState.cpf}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        cpf: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="CPF"
                  />
                </div>

                <div className="w-full md:w-1/2  pt-2 px-3 grid-cols-8" />

                <div className="pt-4 pl-3">
                  <button
                    className="flex flex-row justify-center items-center px-2 py-3 gap-2 w-80 h-12 bg-roxo65 rounded-xl font-text font-normal text-x2 text-white "
                    onClick={() => setStep(2)}
                  >
                    Avançar e Continuar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : step == 2 ? (
        <>
          <FormDoador2 />
          <div className=" flex">
            <div className="container  grid-cols-8 mx-auto pt-5">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                  <input className="m-1" type="checkbox" />
                  <p
                    className="m-1"
                    style={{ color: '#672557', fontWeight: 'bold' }}
                  >
                    Ao clicar nesse botão você concordará com nossos <br />
                    <span>termos e serviços</span>
                  </p>
                  <button
                    className="flex flex-row justify-center items-center ml-56 gap-2 w-80 h-12 bg-roxo65 rounded-xl font-text font-normal text-x2 text-white "
                    onClick={() => setStep(3)}
                  >
                    Finalizar Cadastro
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1>concluido</h1>
      )}
    </>
  );
};

export default FormDoador;
