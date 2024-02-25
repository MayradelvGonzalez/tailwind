import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer/Footer';
import MyForm from './Form/MyForm';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/contact" element={<MyForm />} /> {/* Route for MyForm */}
      <Route path="/" element={<App />} /> {/* Route for App */}
    </Routes>
    <Footer /> {/* Footer outside of Routes */}
   
  </Router>
);

reportWebVitals();
