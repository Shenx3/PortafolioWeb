import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import HomePage from './components/pages/HomePage';
import Footer from './components/organisms/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;