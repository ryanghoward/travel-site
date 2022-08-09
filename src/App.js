import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./Cards";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Cards />
      </Router>
    </>
  );
}

export default App;
