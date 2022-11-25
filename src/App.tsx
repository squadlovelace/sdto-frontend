import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Layout';
import Login from './pages/Login';
import DashboardDoador from './pages/PagesDashboardDoador/Dashboard';
import InstitutionDoador from './pages/PagesDashboardDoador/FrontPageDoador';
import EditPerfilDoador from './pages/PagesDashboardDoador/Perfil/EditPerfil';
import EmployeeRegistration from './pages/PagesDashboardInstituition/EmployeeRegistration';
import DashboardReceptor from './pages/PagesDashboardReceptor/Dashboard';
import InstitutionReceptor from './pages/PagesDashboardReceptor/InstitutionReceptor';
import EditPerfilReceptor from './pages/PagesDashboardReceptor/Perfil/EditPerfil';
import FisrtStepDonator from './pages/PagesFormDonator/FirstStepDonator';
import SecondStepDonator from './pages/PagesFormDonator/SecondStepDonator';
import FirstStepInst from './pages/PagesFormInst/FirstStepInst';
import SecondStepInst from './pages/PagesFormInst/SecondStepInst';
import ThirdStepInst from './pages/PagesFormInst/ThirdStepInst';
import FisrtStepReceptor from './pages/PagesFormReceptor/FisrtStepReceptor';
import SecondStepReceptor from './pages/PagesFormReceptor/SecondStepReceptor';
import ThirdStepReceptor from './pages/PagesFormReceptor/ThirdStepReceptor';
import RecoverPassword from './pages/RecoverPassword';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/formdonator/firststep" element={<FisrtStepDonator />} />
        <Route path="/formdonator/secondstep" element={<SecondStepDonator />} />
        <Route path="/formreceptor/firststep" element={<FisrtStepReceptor />} />
        <Route
          path="/formreceptor/secondstep"
          element={<SecondStepReceptor />}
        />
        <Route
          path="/formreceptor/thirdtstep"
          element={<ThirdStepReceptor />}
        />
        <Route path="/formintituicao/firststep" element={<FirstStepInst />} />
        <Route path="/formintituicao/secondstep" element={<SecondStepInst />} />
        <Route path="/formintituicao/thirdstep" element={<ThirdStepInst />} />
        <Route path="/dashboardreceptor" element={<DashboardReceptor />} />
        <Route path="/editperfilreceptor" element={<EditPerfilReceptor />} />
        <Route
          path="/lisrinstitutionsreceptor"
          element={<InstitutionReceptor />}
        />
        <Route path="/dashboarddoador" element={<DashboardDoador />} />
        <Route path="/editperfildoador" element={<EditPerfilDoador />} />
        <Route path="/lisrinstitutionsdoador" element={<InstitutionDoador />} />
        <Route
          path="/dashboardregisterInstituition"
          element={<EmployeeRegistration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
