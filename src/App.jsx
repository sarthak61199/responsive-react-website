import React from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Special from "./sections/Special";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Home />
        <About />
        <Special />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
