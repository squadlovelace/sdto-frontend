import React, { useCallback, useState} from 'react';
import Concluido from '../Concluido/concluido';
import InputItems from '../Inputs/InputItems';
import InputName from '../Inputs/InputName';
import FormDoador2 from './formD2';
import * as yup from 'yup';

interface IFormState {
    nome:string;
    senha:string,
    razao:string;
    email:string;
    cep:string;
    cidade:string;
    rg:string;
    cpf:string;
}

const FormDoador = () => {
    const [user, setUser] = useState({
        nome:'',
        email:'',
        senha:'',
        rg:'',
        cpf:'',
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
                nome:'',
                email:'',
                senha:'',
                rg:'',
                cpf:'',
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
            nome: yup.string().required().min(6),
            email: yup.string().required().email(),
            senha: yup.string().required().min(6),
            rg: yup.string().required().min(7).max(7),
            cpf: yup.string().required().min(11),
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
      

    const [step, setStep] = useState(1);

    return(
        <>
            {
            step == 1 ?

            <div className='globe'>
                
                <div className="container  grid-cols-8 mx-auto pt-5">
                    <form onSubmit={addUser}>   
                        <div className="flex flex-wrap -mx-3 mb-6">
                           <InputName textLabel={'Nome'} placeholder={'Digite seu nome'} value={user.nome} onChange={valueInput}></InputName>
                            
                            <InputItems type={'text'} textLabel={'E-mail'} placeholder={'Digite seu E-mail'} value={user.email} onChange={valueInput}></InputItems>

                            <InputItems type={'text'} textLabel={'Confirme seu E-mail'} placeholder={'Digite seu E-mail novamente'} value={user.email} onChange={valueInput}></InputItems>
                                
                            
                            <InputItems type={'text'} textLabel={'Senha'} placeholder={'Digite sua senha'} value={user.senha} onChange={valueInput}></InputItems>

                            <InputItems type={'text'} textLabel={'Senha'} placeholder={'Digite sua senha novamente'} value={user.senha} onChange={valueInput}></InputItems>

                            <InputItems type={'text'} textLabel={'RG'} placeholder={'Digite seu RG'} value={user.rg} onChange={valueInput}></InputItems>
                            
                            <InputItems type={'text'} textLabel={'CPF'} placeholder={'Digite seu CPF'} value={user.cpf} onChange={valueInput}></InputItems>

                                <div className="w-full md:w-1/2  pt-2 px-3 grid-cols-8">
                                
                                </div>

                                <div className="pt-4 pl-3">
                                <button style={{backgroundColor:"#672557"}} className="flex flex-row justify-center items-center px-2 py-3 gap-2 w-80 h-12  rounded-xl font-text font-normal text-x2 text-white " onClick={() => setStep(2)}>Avançar e Continuar</button>
                                </div>
                        </div>
                    </form>   
                </div>

            </div>
            
            :
            step == 2 ?
            <> 
                
              <FormDoador2></FormDoador2> 

                <div className=' flex'>
                    <div className="container  grid-cols-8 mx-auto pt-5">
                        <form onSubmit={addUser}>   
                            <div className="flex flex-wrap -mx-3 mb-6 ">
                                <input className="m-1" type="checkbox"/>
                                        <p className='m-1' style={{color:"#672557",fontWeight:"bold"}}>Ao clicar nesse botão você concordará com nossos <br/><span>termos e serviços</span></p>
                                        <button style={{backgroundColor:"#672557"}} className="flex flex-row justify-center items-center ml-56 gap-2 w-80 h-12 rounded-xl font-text font-normal text-x2 text-white "onClick={() => setStep(3)}>Finalizar Cadastro</button>                            
                            </div>
                        </form>   
                    </div>

                </div>

            </>
            :
            <Concluido></Concluido>
            }
        </>
    )
}
    
  
  
  
  export default FormDoador;
