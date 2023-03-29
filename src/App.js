import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// import { Route, Switch } from 'react-router-dom';
import Header from './Header.js';
// import Fashion from './Fashion.js';
// import Prop from './Prop.js';
// import Ecomm from './Ecomm.js';
// import Contact from './Contact.js';
// import Clients from './Clients.js';
// import Home from './Home.js';
import PhotosGrid from './PhotosGrid.js';

class App extends React.Component {
  render() {

    const photos = [
      { src: 'assets/1.jpeg', alt: 'Photo 1' },
      { src: 'assets/2.jpeg', alt: 'Photo 2' },
      { src: 'assets/3.jpeg', alt: 'Photo 3' },
      { src: 'assets/4.jpeg', alt: 'Photo 4' },
      { src: 'assets/5.jpeg', alt: 'Photo 5' },
      { src: 'assets/6.jpeg', alt: 'Photo 6' },
      { src: 'assets/7.jpeg', alt: 'Photo 7' },
      { src: 'assets/8.jpeg', alt: 'Photo 8' },
      { src: 'assets/9.jpeg', alt: 'Photo 9' },
      { src: 'assets/10.jpeg', alt: 'Photo 10' },
      { src: 'assets/11.jpeg', alt: 'Photo 11' },
      { src: 'assets/12.jpeg', alt: 'Photo 12' },
      { src: 'assets/13.jpeg', alt: 'Photo 13' },
      { src: 'assets/14.jpeg', alt: 'Photo 14' },
      { src: 'assets/15.jpeg', alt: 'Photo 15' },
      { src: 'assets/16.jpeg', alt: 'Photo 16' },
      { src: 'assets/17.jpeg', alt: 'Photo 17' },
      { src: 'assets/18.jpeg', alt: 'Photo 18' },
      { src: 'assets/19.jpeg', alt: 'Photo 19' },
      { src: 'assets/20.jpeg', alt: 'Photo 21' },
      { src: 'assets/21.jpeg', alt: 'Photo 21' },
      { src: 'assets/22.jpeg', alt: 'Photo 22' },
      { src: 'assets/23.jpeg', alt: 'Photo 23' },
      { src: 'assets/24.jpeg', alt: 'Photo 24' },
      { src: 'assets/25.jpeg', alt: 'Photo 25' },
      { src: 'assets/26.jpeg', alt: 'Photo 26' },
    ];
    return (
      <>
        <BrowserRouter>
          <Header />
          <PhotosGrid photos={photos}/>
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/fashion" component={Fashion} />
            <Route path="/prop" component={Prop} />
            <Route path="/ecomm" component={Ecomm} />
            <Route path="/contact" component={Contact} />
            <Route path="/clients" component={Clients} />
          </Switch> */}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
