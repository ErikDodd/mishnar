import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import {  Route, Switch } from 'react-router-dom';
import Header from './Header.js';


class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
            {/* <Switch>
              <Route exact path="/" component={App} />
              <Route path="/fashion" component={Fashion} />
            <Route path="/prop" component={Prop} />
            <Route path="/ecomm" component={Ecomm} />
            <Route path="/contact" component={Contact} />
            <Route path="/clients" component={Clients} />
            </Switch> */}
            <Header></Header>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
