import Hero from "./Hero_Section";
import About from "./Components/About_Me";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  return (
    <section className="bg-blue-600 lg:px-18 px-6 py-14">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Experience />
      <Contact />
    </section>
  );
}

export default App;
