import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Layout';
import QuemSomos from './pages/QuemSomos';
import SaibaMais from './pages/SaibaMais';
import FormInst from './pages/CadInst';
import CadReceptor from './pages/CadReceptor';
import CadDoador from './pages/CadDoador';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saibamais" element={<SaibaMais />} />
        <Route path="quemsomos" element={<QuemSomos />} />
        <Route path="/forminst" element={<FormInst/>} />
        <Route path="/formreceptor" element={<CadReceptor/>} />
        <Route path="/formdoador" element={<CadDoador/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
