import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import HireMe from "./components/pages/HireMe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/hireme' element={<HireMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
