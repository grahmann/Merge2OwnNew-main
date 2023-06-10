import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { Services } from "./Components/Services";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />      
      <Services />      
      <Footer />
    </div>
  );
}

export default App;
