import React, { useCallback, useState} from 'react';
import InputItems3 from '../Inputs/InputItem3';
import InputItems from '../Inputs/InputItems';
import InputItems2 from '../Inputs/InputItems2';
import InputName from '../Inputs/InputName';
import * as yup from 'yup';



interface IFormState {
    cnpj:string;
    razao:string;
    email:string;
    cep:string;
    cidade:string;
}



const FormInst2 = () => {
    const [user, setUser] = useState({
              nome:'',
              cpf:'',
              crm:'',
              telefone:'',
              endereco:'',
              uf:'',
              complemento:''
        });
      
        const [status, setStatus] = useState({
          type: '',
          mensagem: ''
        });
      
        //Receber os dados do formulário
        const valueInput = (e: { target: { name: any; value: any; }; }) => setUser({ ...user, [e.target.name]: e.target.value });
      
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
              cpf:'',
              crm:'',
              telefone:'',
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
            nome: yup.string().required(),
            cpf: yup.string().required(),
            crm: yup.string().required().email(),
            telefone: yup.number().required(),
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
    return(
        <>
    <div className='globe flex'>

        <div className="container  grid-cols-8 mx-auto pt-5">
            <form onSubmit={addUser}>   
                <div className="flex flex-wrap -mx-3 mb-6">
                    <InputName textLabel={'Nome'} placeholder={'Digite seu nome completo'} value={user.nome} onChange={valueInput}></InputName>
                   
                   <InputItems2 type={'text'} textLabel={'CPF'} placeholder={'Digite seu CPF'} value={user.cpf} onChange={valueInput}></InputItems2>

                   <InputItems2 type={'text'} textLabel={'CRM'} placeholder={'Digite seu CRM caso possua'} value={user.crm} onChange={valueInput}></InputItems2>
                    
                   <InputItems2 type={'text'} textLabel={'Telefone'} placeholder={'( _ _ ) _ _ _ _ _ _ _ _ _'} value={user.telefone} onChange={valueInput}></InputItems2>

                   <InputItems2 type={'text'} textLabel={'Endereço'} placeholder={'Digite seu endereço'} value={user.endereco} onChange={valueInput}></InputItems2>

                  <InputItems3 type={'text'} textLabel={'UF'} placeholder={'Digite a UF'} value={user.uf} onChange={valueInput}></InputItems3>

                  <InputItems type={'text'} textLabel={'Complemento'} placeholder={'Digite o complemento do seu endereço'} value={user.complemento} onChange={valueInput}></InputItems>
                   
                </div>
            </form>   
        </div>

    </div>
        </>
    )
}
    
  
  
  
  export default FormInst2;