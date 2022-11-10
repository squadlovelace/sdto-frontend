import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormDonator from './pages/FormDonator';
import FormInstitution from './pages/FormInstitution';
import FormReceptor from './pages/FormReceptor';
import Home from './pages/Home/Layout';
import Login from './pages/Login';
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
        <Route path="/formdonator" element={<FormDonator />} />
        <Route path="/forminst" element={<FormInstitution />} />
        <Route path="/formreceptor" element={<FormReceptor />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
