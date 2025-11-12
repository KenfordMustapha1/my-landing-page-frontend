// src/components/LandingPage.js
import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import About from "./About";
import ClientLogo from "./ClientLogo";
import StepByStep from "./StepByStep";
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <section id="home">
              <Home />
            </section>

            <section id="about">
              <About />
            </section>
            
            <section id="clientlogo">
              <ClientLogo />
            </section>

             <section id="stepbystep">
              <StepByStep />
            </section>

            <section id="contact-us">
              <ContactUs />
            </section>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marketnav" element={<div>Market Navigation Page</div>} />
      </Routes>
      

      <footer className="footer" id="footer">
        &copy; {new Date().getFullYear()} Philippine Coconut Authority. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;