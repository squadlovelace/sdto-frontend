import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
