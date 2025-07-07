import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
