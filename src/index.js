import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Seleccionamos el div con id 'root' de tu index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);