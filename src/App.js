import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <body theme={theme}>
        <Header onThemeToggle={toggleTheme} theme={theme} />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
        <ScrollUp />
      </body>
    </>
  );
};

export default App;
