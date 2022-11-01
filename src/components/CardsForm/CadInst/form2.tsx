import React, { useCallback, useState} from 'react';
import ButtonForm from '../Buttons/ButtonForm';


interface IFormState {
    cnpj:string;
    razao:string;
    email:string;
    cep:string;
    cidade:string;
}



const FormInst2 = () => {
    const [formState,setFormState] = useState<IFormState>({
        cnpj:"",
        razao:"",
        email:"",
        cep:"",
        cidade:""
           
    });

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) =>  {
        event.preventDefault()

        const {cnpj,razao} = formState;
        if(!cnpj ||razao)

        window.alert("preencha os todos os campos")

        return

    },[formState])
    return(
        <>
    <div className='globe flex'>

        <div className="container  grid-cols-8 mx-auto pt-5">
            <form onSubmit={handleSubmit}>   
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0 pt-4">
                        <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        <p style={{color:"#672557"}}>Nome</p>
                        </label>
                        <input className="appearance-none block w-full  text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name=""id="grid-first-name" type="text" value={formState.razao}onChange={(event)=>setFormState({...formState,razao:event.currentTarget?.value ||""})}placeholder="Digite seu Nome Completo"/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 pt-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        <p style={{color:"#672557"}}>CPF</p>
                        </label>
                        <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="cnpj"placeholder="Digite Seu CPF" value={formState.cnpj}onChange={(event)=>setFormState({...formState,cnpj:event.currentTarget?.value ||""})}/>
                        
                    </div>
                    <div className="w-full md:w-1/3 px-3 pt-4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            <p style={{color:"#672557"}}>CRM</p>
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={formState.email}onChange={(event)=>setFormState({...formState,email:event.currentTarget?.value ||""})} placeholder="Digite Seu CRM"/>
                        
                    </div>
                    <div className="w-full md:w-1/3 pt-4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            <p style={{color:"#672557"}}>Telefone</p>
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={formState.cep}onChange={(event)=>setFormState({...formState,cep:event.currentTarget?.value ||""})} placeholder="(_ _) _ _ _ _ _ - _ _ _ _"/>
                        
                    </div>
                    <div className="w-full md:w-1/3  pt-4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            <p style={{color:"#672557"}}>CEP</p>
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={formState.cidade}onChange={(event)=>setFormState({...formState,cidade:event.currentTarget?.value ||""})}placeholder="CEP"/>
                        
                    </div>
                    <div className="w-full md:w-1/3  pt-4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            <p style={{color:"#672557"}}>Cidade</p>
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={formState.cidade}onChange={(event)=>setFormState({...formState,cidade:event.currentTarget?.value ||""})}placeholder="Digite a cidade onde localiza-se a instituição"/>
                        
                    </div>
                    <div className="w-full md:w-1/3  pt-4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            <p style={{color:"#672557"}}>RG</p>
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={formState.cidade}onChange={(event)=>setFormState({...formState,cidade:event.currentTarget?.value ||""})}placeholder="Digite seu RG"/>
                        
                    </div>
                    <div className="w-full md:w-1/3  pt-4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            <p style={{color:"#672557"}}>Endereço</p>
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={formState.cidade}onChange={(event)=>setFormState({...formState,cidade:event.currentTarget?.value ||""})}placeholder="Digite a Rua,Número e Bairro"/>
                        
                    </div>
                    <div className="w-full md:w-1/3  pt-4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            <p style={{color:"#672557"}}>UF</p>
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={formState.cidade}onChange={(event)=>setFormState({...formState,cidade:event.currentTarget?.value ||""})}placeholder="Digite a UF"/>
                        
                    </div>
                    <div className="w-full md:w-1/3  pt-4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            <p style={{color:"#672557"}}>Complemento</p>
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={formState.cidade}onChange={(event)=>setFormState({...formState,cidade:event.currentTarget?.value ||""})}placeholder="Digite o complemento do seu endereço"/>
                        
                    </div>

               
                   
                </div>
            </form>   
        </div>

    </div>
        
        

        </>

    )
}
    
  
  
  
  export default FormInst2;