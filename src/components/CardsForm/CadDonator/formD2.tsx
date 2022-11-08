import React, { useCallback, useState} from 'react';
import InputDate from '../Inputs/InputDate';
import InputItems from '../Inputs/InputItems';
import InputName from '../Inputs/InputName';
import * as yup from 'yup';

interface IFormState {
    cnpj:string;
    razao:string;
    email:string;
    cep:string;
    cidade:string;
    rg:string;
    telefone:string;
    cpf:string;
    data:string;
}
const FormDoador2 = () => {
    const [user, setUser] = useState({
        nome:'',
        rg:'',
        senha:'',
        telefone:'',
        cpf:'',
        cidade:'',
        data:'',
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
                rg:'',
                senha:'',
                telefone:'',
                cpf:'',
                cidade:'',
                data:'',
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
    return(
        <>
    <div className='globe flex'>

        <div className="container  grid-cols-8 mx-auto pt-5">
            <form onSubmit={addUser}>   
                <div className="flex flex-wrap -mx-3 mb-6">
                    <InputName textLabel={'Name'} placeholder={'Digite seu Nome'} value={user.nome} onChange={valueInput}></InputName>
            
                    <InputItems type={'text'} textLabel={'RG'} placeholder={'Digite seu RG'} value={user.rg} onChange={valueInput}></InputItems>

                    <InputItems type={'text'} textLabel={'Telefone'} placeholder={'( _ _ ) _ _ _ _ _ _ _ _ _'} value={user.telefone} onChange={valueInput}></InputItems>
                    
                    <InputItems type={'text'} textLabel={'CPF'} placeholder={'Digite seu CPF'} value={user.cpf} onChange={valueInput}></InputItems>
                    
                    <InputItems type={'text'} textLabel={'Cidade'} placeholder={'Digite a cidade onde você reside'} value={user.cidade} onChange={valueInput}></InputItems>

                    <InputDate type={'date'} textLabel={'Data de nascimento'} placeholder={''} value={user.data} onChange={undefined}></InputDate>    
                </div>
            </form>   
        </div>

    </div>
        </>

    )
}
  export default FormDoador2;