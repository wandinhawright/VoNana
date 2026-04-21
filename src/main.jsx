import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Index.jsx';
import Produtos from './produtos.jsx'; 
import Preparo from './preparo.jsx';
import Institucional from './institucional.jsx';
import Revendedor from './revendedor.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/preparo" element={<Preparo />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/revendedor" element={<Revendedor />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);