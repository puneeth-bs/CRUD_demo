import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
