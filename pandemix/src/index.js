import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { DiseaseProvider } from './context/DiseaseContext';
import './styles/App.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <DiseaseProvider>
      <App />
    </DiseaseProvider>
  </React.StrictMode>
);