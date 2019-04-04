import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import './CSS/styles.css';
import Homepage from './components/pages/homePage';
import Header from './components/headercomponent/header';
import Casestudy from './components/pages/casestudy';
import FfBranding from './components/pages/ff-branding';

//import Footer from './components/footercomponent/footer';



class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Header />
              <Route exact path='/' component={Homepage} />
              <Route exact path='/Casestudy' component={Casestudy} />
              <Route exact path='/ff-branding' component={FfBranding} />
          </div>
      </Router>
    );
  }
}



export default App;
