import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Layout';
import FormInst from './pages/Institution';
import CadReceptor from './pages/Receptor';
import RegisterDonator from './pages/RegisterDonator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerdonator" element={<RegisterDonator />} />
        <Route path="/forminst" element={<FormInst />} />
        <Route path="/formreceptor" element={<CadReceptor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
