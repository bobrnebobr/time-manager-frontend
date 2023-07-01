import React from 'react';
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/new_task" element={<NewTask />}/>
          </Routes>
      </Router>
  );
}

export default App;
