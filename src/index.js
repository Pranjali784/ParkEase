import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router here
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router> {/* Wrap App with Router here */}
    <App />
  </Router>
);
