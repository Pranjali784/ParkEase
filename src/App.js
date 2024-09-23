import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route here
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import SigninPage from './pages/SigninPage'; // Import SigninPage component
import './App.css';

function App() {
  return (
    <div className="app-container" style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SigninPage />} /> {/* Use SigninPage here */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
