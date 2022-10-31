import React from "react";
import CadDoador from "../../components/CadDoador/formD"
import FooterForm from "../../components/FooterForm/footerForm";
import HeaderDoador from "../../components/HeaderDoador/headerDoador";




class FormInst extends React.Component{
    render() {
        return (
            <>
           
            <HeaderDoador></HeaderDoador>

            <CadDoador></CadDoador>
            
            <FooterForm></FooterForm>

            </>
            
        
        )
    }
}

export default FormInst;