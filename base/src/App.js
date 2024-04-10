import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="about">
        <About />
       </section>

      <section id="service">
          <Service />
      </section>

      <section id="contact">
          <Contact />
      </section>
      
    </div>
  );
}

export default App;
