import React from 'react';

import FormReceptor from '../../components/CardsForm/CadReceptor/formR';
import FooterForm from '../../components/FooterForm/footerForm';
import HeaderReceptor from '../../components/HeaderReceptor/headerReceptor';

class CadReceptor extends React.Component {
  render() {
    return (
      <>
        <HeaderReceptor />

        <FormReceptor />

        <FooterForm />
      </>
    );
  }
}

export default CadReceptor;
