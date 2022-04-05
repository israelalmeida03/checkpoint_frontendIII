import "./styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
         <Header/>
         <About/>
         <Skills/>
         <Projects/>
         <Footer/>
      
    </div>
  );
}

export default App;
