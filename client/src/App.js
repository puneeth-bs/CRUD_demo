import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import AddItemForm from "./components/AddItem/addItem"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addItemForm" element={<AddItemForm />}/>
          {/* <Route path="/about" element={<About />}/> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
