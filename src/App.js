import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clients from './pages/Clients';
import Prop from './pages/Prop';
import Contact from './pages/Contact';
import Ecomm from './pages/Ecomm';
import Fashion from './pages/Fashion';
import Footer from './components/Footer';
import './fontawesome';


const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Fashion' element={<Fashion />} />
          <Route path='/Prop' element={<Prop />} />
          <Route path='/Ecomm' element={<Ecomm />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Clients' element={<Clients />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};


export default App;

