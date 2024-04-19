import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Page from './Pages/Page';
import Registration from './Pages/Registration';
function App() {
  return (
    <div className="App">
     <h1>THis is outcome</h1>
     <Page/>
     <Router>
      <Routes>
      <Route path="/Reg" element={<Registration />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
