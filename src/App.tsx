import { Routes, Route } from 'react-router-dom';
import CalculatorPage from './pages/calculator';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path="/react-form-test/" element={<CalculatorPage />} />
    </Routes>
  );
}

export default App;
