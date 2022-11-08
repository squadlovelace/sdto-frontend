import React from 'react';
import FormReceptor from '../../components/CardsForm/CadReceptor/formR';
import { Header } from '../../components/Header';


class CadReceptor extends React.Component {
  render() {
    return (
      <>

        <Header></Header>
        <FormReceptor />
        
      </>
    );
  }
}

export default CadReceptor;
