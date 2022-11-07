import React from "react";
import Path from './Path.png'


function HeaderInst2() {
    return(
        <>
       <div className=" container mx-auto pt-5 flex">
            <div className="headerInst pt-3" >
                    <img src={Path}/>
                    <h1 className="text-x5 pt-2 " style={{color:"#672557"}}>Cadastre-se como instituição</h1>
                    <span className="text-x2 pt-2" style={{color:"#672557"}}>Preencha os campos a seguir com informações do responsável da instituição</span>
                
            </div>
       </div>
    
   
        </>
    )
}

export default HeaderInst2;