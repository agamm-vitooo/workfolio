import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingDock from './components/organism/FloatingDock';
import HomePages from './pages/HomePages';
import ProjectPages from './pages/ProjectPages';
import TimelinePages from './pages/TimelinePages';

function App() {
  return (
    <Router> {/* Bungkus aplikasi dengan <Router> */}
      <div className="App">
        {/* Define Routes here */}
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/project" element={<ProjectPages />} />
          <Route path= "/timeline" element={<TimelinePages/>} />
        </Routes>
        
        {/* FloatingDock berada dalam <Router>, sehingga useNavigate bisa diakses */}
        <FloatingDock />
      </div>
    </Router>
  );
}

export default App;
