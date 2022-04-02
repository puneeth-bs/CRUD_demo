import "./App.css";
import React, { useState } from "react";
import { Button } from "grommet";
import { Grommet } from "grommet";
import { hpe } from "grommet-theme-hpe";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Footer from "./components/Footer/footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <About />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
