import DivPurple from '../../components/DivPurple/DivPurple';
import FooterFormAccces from '../../components/FormsAcccess/FooterFormAccces';
import FormRegisterAccces from '../../components/FormsAcccess/FormRegisterAccces';
import HeaderFormAccess from '../../components/FormsAcccess/HeaderFormAccess';

const Register = () => (
  <div className="flex  w-[100%] h-[100vh]">
    <section className="w-[74%]">
      <HeaderFormAccess />
      <FormRegisterAccces />
      <FooterFormAccces />
    </section>
    <DivPurple />
  </div>
);

export default Register;
