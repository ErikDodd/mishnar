import React from 'react';
import './App.css';
import Fashion from './Fashion';
import Header from './Header.js';
import Navigation from './Navigation.js';


class App extends React.Component {
  render() {

    
    return (
      <>
        <Header />
        <Navigation />
        <Fashion/>

      </>
    );
  }
}

export default App;
