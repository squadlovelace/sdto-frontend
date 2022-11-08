import React, { useState } from 'react';
import HeaderInst from '../../HeaderInst/HeaderInst';
import HeaderInst2 from '../../HeaderInst/HeaderInst2';
import InputName from '../Inputs/InputName';
import InputItems from '../Inputs/InputItems';
import FormInst2 from './form2';
import InputItems2 from '../Inputs/InputItems2';
import InputItems3 from '../Inputs/InputItem3';
import Concluido from '../Concluido/concluido';
import FooterPurple from '../../FooterPurple/footerPurple';
import FooterForm from '../../FooterForm';
import * as yup from 'yup';




interface IFormState {
  cnpj: string;
  razao: string;
  email: string;
  cep: string;
  cidade: string;
  endereco:string;
  uf:string;
  complemento:string;
}

const FormInst = () => {
  
  const [step, setStep] = useState(1);

  const [user, setUser] = useState({
  razao:'',
  cnpj:'',
  email:'',
  cep:'',
  cidade:'',
  endereco:'',
  uf:'',
  complemento:''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  //Receber os dados do formulário
  const valueInput = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const newValue = e.target.value;
    // console.log(newValue,'Deu certo')
 }

  //Enviar os dados para o back-end
  const addUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if(!(await validate())) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'success',
        mensagem: "Usuário cadastrado com sucesso!"
      });

      setUser({
        razao:'',
        cnpj:'',
        email:'',
        cep:'',
        cidade:'',
        endereco:'',
        uf:'',
        complemento:''
      });
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });
    }
  }
  async function validate(){
    let schema = yup.object().shape({
      razao: yup.string().required(),
      cnpj: yup.string().required(),
      email: yup.string().required().email(),
      cep: yup.string().required(),
      cidade: yup.string().required(),
      endereco: yup.string().required(),
      uf: yup.string().required(),
      complemento: yup.string().required(),
    });

    try{
      await schema.validate(user);
      return true;
    }catch (err) {
      setStatus({
        type: 'error',
        mensagem: 'Campo inválido'
      });
      return false;
    }
  }

  return (
    <>
      {step == 1 ? (
        <div className="globe">
          <HeaderInst />
          <div className="container  grid-cols-8 mx-auto pt-5">
            <form onSubmit={addUser}>
              <div className="flex flex-wrap -mx-3 mb-6">
                
                <InputName textLabel={'Razão Social'} placeholder={'Digite a razão social da instituição'} value={user.razao} onChange={valueInput}></InputName>
                
                <InputItems textLabel={'CPNJ'} placeholder={'Digite o CNPJ'} value={user.cnpj} onChange={valueInput} type={'text'}></InputItems>

                <InputItems textLabel={'Email'} placeholder={'Digite o Email da Instituição'} value={user.email} onChange={valueInput} type={'text'}></InputItems>

                <InputItems textLabel={'CEP'} placeholder={'Digite o CEP'} value={user.cep} onChange={valueInput} type={'text'}></InputItems>

                <InputItems textLabel={'Cidade'} placeholder={'Digite a Cidade onde se localiza a Instituição'} value={user.cidade} onChange={valueInput} type={'text'}></InputItems>

                <InputItems2 type={'text'} textLabel={'Endereço'} placeholder={'Digite seu Endereço'} value={user.endereco} onChange={valueInput} ></InputItems2>

                <InputItems3 type={'text'} textLabel={'UF'} placeholder={'Digite a UF'} value={user.uf} onChange={valueInput}></InputItems3>

                <InputItems textLabel={'Complemento'} placeholder={'Digite o Complemento do seu endereço'} value={user.complemento} onChange={valueInput} type={'text'}></InputItems>

                

                <div className="w-full md:w-1/2  pt-2 px-3 grid-cols-8" />

                <div className="pt-4 pl-3">
                  <button
                    style={{backgroundColor:"#672557"}}
                    className="flex flex-row justify-center items-center px-2 py-3 gap-2 w-80 h-12 rounded-xl font-text font-normal text-x2 text-white "
                    onClick={() => setStep(2)}
                  >
                    Avançar e Continuar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <FooterForm></FooterForm>
        </div>
      ) : step == 2 ? (
        <>
          <HeaderInst2 />
          <FormInst2 />

          <div className=" flex">
            <div className="container  grid-cols-8 mx-auto pt-5">
              <form onSubmit={addUser}>
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
                    style={{backgroundColor:"#672557"}}
                    className="flex flex-row justify-center items-center ml-56 gap-2 w-80 h-12 bg-roxo65 rounded-xl font-text font-normal text-x2 text-white "
                    onClick={() => setStep(3)}
                  >
                    Finalizar Cadastro
                  </button>
                </div>
              </form>
            </div>
          </div>
          <FooterForm></FooterForm>
        </>
      ) : (
        <>
          <Concluido></Concluido>
          <FooterPurple></FooterPurple>
      
        </>
      )}
    </>
  );
};

export default FormInst;
