// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;