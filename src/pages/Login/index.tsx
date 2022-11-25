import DivPurple from '../../components/DivPurple/DivPurple';
import DivInfo from '../../components/FormsAcccess/DivInfo';
import FooterFormAccces from '../../components/FormsAcccess/FooterFormAccces';
import SectionFormInfo from '../../components/FormsAcccess/FormLoginAccess';
import HeaderFormAccess from '../../components/FormsAcccess/HeaderFormAccess';

const Login = () => (
  <div className="flex  w-[100%] h-[100vh]">
    <section className="w-[74%]">
      <HeaderFormAccess />
      <DivInfo>
        <SectionFormInfo />
      </DivInfo>
      <FooterFormAccces />
    </section>
    <DivPurple />
  </div>
);

export default Login;

