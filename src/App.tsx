import "./App.scss";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        {/* <Projects /> */}
        {/* <Contact /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
