// main.tsx sirve como punto de entrada principal para la aplicación React.
// Renderiza el componente App dentro del elemento HTML con el ID 'root'.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se pudo encontrar el elemento con el ID "root".');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);