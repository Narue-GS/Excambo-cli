import Home from "./views/home";
import Register from "./views/register"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cadastro" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
