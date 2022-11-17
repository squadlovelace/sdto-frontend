import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Layout';
import Login from './pages/Login';
import FisrtStepDonator from './pages/PagesFormDonator/FisrtStepDonator';
import SecondStepDonator from './pages/PagesFormDonator/SecondStepDonator';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
