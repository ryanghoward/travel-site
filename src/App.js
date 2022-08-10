import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Cards />
        <Footer />
        <Routes>
          <Route path='/hireme' component={HireMe} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
