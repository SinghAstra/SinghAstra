import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
