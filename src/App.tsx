import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormInst from './components/CardsForm/CadInst/form';
import Home from './pages/Home/Layout';
import CadInst from './pages/Institution';
import Login from './pages/Login';
import CadReceptor from './pages/Receptor';
import RecoverPassword from './pages/RecoverPassword';
import Register from './pages/Register';
import RegisterDonator from './pages/RegisterDonator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/registerdonator" element={<RegisterDonator />} />
        <Route path="/forminst" element={<CadInst />} />
        <Route path="/formreceptor" element={<CadReceptor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
