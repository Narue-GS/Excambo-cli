import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home.jsx";
import Register from "./pages/register.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
	  <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
