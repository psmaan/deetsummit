import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Dealroom from './components/Dealroom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Homepage />} />
        <Route path="/dealroom" element={<Dealroom />} />
      </Routes>
    </Router>
  );
}

export default App;
