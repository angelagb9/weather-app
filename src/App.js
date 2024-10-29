import React from 'react'
import './App.css';
import NavMenu from './components/NavMenu';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <NavMenu />
          <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
