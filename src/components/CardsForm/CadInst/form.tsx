import React, { useCallback, useState } from 'react';

import HeaderInst from '../HeaderInst/HeaderInst';
import HeaderInst2 from '../HeaderInst/HeaderInst2';
import FormInst2 from './form2';

interface IFormState {
  cnpj: string;
  razao: string;
  email: string;
  cep: string;
  cidade: string;
}

const FormInst = () => {
  const [formState, setFormState] = useState<IFormState>({
    cnpj: '',
    razao: '',
    email: '',
    cep: '',
    cidade: '',
  });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { cnpj, razao } = formState;
      if (!cnpj || razao) window.alert('preencha os todos os campos');
    },
    [formState]
  );

  const [step, setStep] = useState(1);

  return (
    <>
      {step == 1 ? (
        <div className="globe">
          <HeaderInst />
          <div className="container  grid-cols-8 mx-auto pt-5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0 pt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Razão</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    name=""
                    id="grid-first-name"
                    type="text"
                    value={formState.razao}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        razao: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>CNPJ</p>
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name="cnpj"
                    placeholder="Digite Seu CNPJ"
                    value={formState.cnpj}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        cnpj: event.currentTarget?.value || '',
                      })
                    }
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 pt-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Email</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={formState.email}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        email: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="Digite Seu Email da instituição"
                  />
                </div>
                <div className="w-full md:w-1/2 pt-4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>CEP</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={formState.cep}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        cep: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="Digite o CEP"
                  />
                </div>
                <div className="w-full md:w-1/2  pt-4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Cidade</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={formState.cidade}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        cidade: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="Digite a cidade onde localiza-se a instituição"
                  />
                </div>

                <div className="w-full md:w-1/3 pt-4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Endereço</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={formState.cidade}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        cidade: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="Digite rua,número e bairro"
                  />
                </div>

                <div className="w-full md:w-1/6  pt-4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>UF</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={formState.cidade}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        cidade: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="UF"
                  />
                </div>

                <div className="w-full md:w-1/2  pt-4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    <p style={{ color: '#672557' }}>Complemento</p>
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={formState.cidade}
                    onChange={(event) =>
                      setFormState({
                        ...formState,
                        cidade: event.currentTarget?.value || '',
                      })
                    }
                    placeholder="Digite o complemento do seu endereço"
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
          <HeaderInst2 />
          <FormInst2 />

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

export default FormInst;
