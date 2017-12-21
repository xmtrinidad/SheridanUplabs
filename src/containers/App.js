import React, { Component } from 'react';
import './App.css';

import Nav from '../components/Nav/Nav';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';

class App extends Component {
  state = {
    mobileMenu: false
  }
  menuClick = () => {
    const menuState = this.state.mobileMenu !== true;
    this.setState({mobileMenu: menuState})
  }
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <div>
            <h2 className="App__title">Sheridan</h2>
            <p className="App__subtitle">EST. 1967</p>
          </div>
        </header>
        <Nav 
          menu={this.state.mobileMenu}
          click={this.menuClick}/>
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
