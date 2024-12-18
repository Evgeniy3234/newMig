import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './MainPage/MainPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Examination  from './Pages/Examination/Examination'
import  Design  from './Pages/Design/Design'
import  Monitoring  from './Pages/Monitoring/Monitoring'
import  Research  from './Pages/Research/Research'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/design" element={<Design />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
