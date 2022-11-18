import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Layout';
import Login from './pages/Login';
import FisrtStepDonator from './pages/PagesFormDonator/FisrtStepDonator';
import SecondStepDonator from './pages/PagesFormDonator/SecondStepDonator';
import BodyFirstStepInst from './pages/PagesFormInst/FisrtStepInst/BodyFirstStepInst';
import BodySecondInst from './pages/PagesFormInst/SecondStepInst/BodySecondInst';
import BodyFirstStepReceptor from './pages/PagesFormReceptor/FisrtStepReceptor/BodyFirstStepReceptor';
import BodySecondReceptor from './pages/PagesFormReceptor/SecondStepReceptor/BodySecondReceptor';
import BodyThirdtStepReceptor from './pages/PagesFormReceptor/ThirdStepReceptor/BodyThirdStepReceptor';

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
        <Route path="/formreceptor/firststep" element={<BodyFirstStepReceptor />} />
        <Route path="/formreceptor/secondstep" element={<BodySecondReceptor />} />
        <Route path="/formreceptor/thirdstep" element={<BodyThirdStepReceptor />} />
        <Route path="/forminst/firststep" element={<BodyFirstStepInst />} />
        <Route path="/forminst/secondstep" element={<BodySecondInst />} />
        <Route path="/forminst/thirdstep" element={<BodyFirstStepInst />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
