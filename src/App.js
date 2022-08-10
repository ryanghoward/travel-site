import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import HireMe from "./components/pages/HireMe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/hireme' element={<HireMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
