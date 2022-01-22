import React, { Fragment } from 'react'
import Body from './components/Body/Body';
import Footer from './components/includes/Footer';
import Header from './components/includes/Header';


function App() {
  return (
    <Fragment>
      <div id="preloader">
          <div id="loading-animation">&nbsp;</div>
      </div>
      <Header />
      <Body />
      <Footer />
      <div class="back-to-top">
          <i class="fa fa-angle-up fa-3x"></i>
      </div>
    </Fragment>
  );
}

export default App;
