import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DiseaseProvider } from './context/DiseaseContext';
import './styles/App.css';

ReactDOM.render(
  <React.StrictMode>
    <DiseaseProvider>
      <App />
    </DiseaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);