import React from 'react';
import './App.css';
import Header from './Header.js';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clients from './pages/Clients';
import Prop from './pages/Prop';
import Contact from './pages/Contact';
import Ecomm from './pages/Ecomm';
import Fashion from './pages/Fashion';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/Fashion' element={<Fashion />} />
            <Route path='/Prop' element={<Prop />} />
            <Route path='/Ecomm' element={<Ecomm />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Clients' element={<Clients />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;

