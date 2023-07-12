import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Registration from './routes/RegistrationRoute';
import Contact from './routes/ContactRoute';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>
);

