import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Homepage from "./pages/Homepage";
import Clients from './pages/Clients';
import Prop from './pages/Prop';
import Contact from './pages/Contact';
import Ecomm from './pages/Ecomm';
import Fashion from './pages/Fashion';
import Footer from './components/Footer';
import './fontawesome';


const App = () => {
  const [bottomElementHeight, setBottomElementHeight] = useState(0);
  const bottomElementRef = useRef(null);

  useEffect(() => {
    const calculateBottomElementHeight = () => {
      const height = bottomElementRef.current.offsetHeight;
      setBottomElementHeight(height);
    };

    calculateBottomElementHeight();
    window.addEventListener('resize', calculateBottomElementHeight);

    return () => {
      window.removeEventListener('resize', calculateBottomElementHeight);
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Prop" element={<Prop />} />
          <Route path="/Ecomm" element={<Ecomm />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Clients" element={<Clients />} />
        </Routes>
      </Router>

      <div ref={bottomElementRef} id="bottomElement"></div>
      <Footer bottomElementHeight={bottomElementHeight} />
    </>
  );
};


export default App;

