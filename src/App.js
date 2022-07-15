import "./App.css";
import Hero from "./components/hero.jsx";
import Details from "./components/details";
import HealthBenifits from "./components/healthBenifits";
import Shop from "./components/shop";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useContext, useState } from "react";
import { cartContext } from "./helper/context";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App ">
      <cartContext.Provider value={{ cart, setCart }}>
        <Hero />
        <Details />
        <HealthBenifits />
        <Shop />
        <Contact />
        <Footer />
      </cartContext.Provider>
    </div>
  );
}

export default App;
