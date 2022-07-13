import "./App.css";
import Hero from "./components/hero.jsx";
import Details from "./components/details";
import HealthBenifits from "./components/healthBenifits";
import Shop from "./components/shop";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App ">
      <Hero />

      <Details />
      <HealthBenifits />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
