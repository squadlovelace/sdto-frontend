import DivPurple from '../../components/DivPurple/DivPurple';
import DivInfo from '../../components/FormsAcccess/DivInfo';
import FooterFormAccces from '../../components/FormsAcccess/FooterFormAccces';
import FormRecoverAccess from '../../components/FormsAcccess/FormRecoverAccess';
import HeaderFormAccess from '../../components/FormsAcccess/HeaderFormAccess';

const RecoverPassword = () => (
  <div className="flex  w-[100%] h-[100vh]">
    <section className="w-[74%]">
      <HeaderFormAccess />
      <DivInfo>
        <FormRecoverAccess />
      </DivInfo>
      <FooterFormAccces />
    </section>
    <DivPurple />
  </div>
);

export default RecoverPassword;
