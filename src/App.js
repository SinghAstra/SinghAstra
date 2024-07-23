import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MouseFollower from "./components/MouseFollower";
import Subscribe from "./components/Subscribe";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div id="main">
      <Hero />
      <Features />
      <About />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
