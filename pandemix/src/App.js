import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiseasePage from './pages/DiseasePage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disease/:id" element={<DiseasePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;