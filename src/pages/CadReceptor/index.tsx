import React from "react";
import FooterForm from "../../components/FooterForm/footerForm";
import HeaderReceptor from "../../components/HeaderReceptor/headerReceptor";
import FormReceptor from "../../components/CadReceptor/formR";




class CadReceptor extends React.Component{
    render() {
        return (
            <>
           
            <HeaderReceptor></HeaderReceptor>

            <FormReceptor></FormReceptor>
            
            <FooterForm></FooterForm>

            </>
            
        
        )
    }
}

export default CadReceptor;