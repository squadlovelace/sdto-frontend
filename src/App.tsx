import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Layout';
import QuemSomos from './pages/QuemSomos';
import SaibaMais from './pages/SaibaMais';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saibamais" element={<SaibaMais />} />
        <Route path="quemsomos" element={<QuemSomos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
