import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skills/Skill";
import Works from "./components/Works/Works";


function App() {
  return (
    <div className="APP">
          <Navbar/>
          <Hero/>
          <Skill/>
          <Works/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
