import React, { Component } from 'react';
import Instance from './Instance';
import './App.css';
import { SitesContext } from './SitesContext';
import Commands from './Commands';

class App extends Component {

  constructor(props){
    super(props);

    /**
     * Update context properties
     * @param  {[type]} instance [description]
     * @param  {[type]} property [description]
     * @param  {[type]} value    [description]
     * @return {[type]}          [description]
     */
    this.update = (instance, property, value) => {
      this.state[instance][property] = value;
      this.setState(this.state);
    }

    this.state = {
      old: {
        url: "https://",
        prefix: "wp_",
      },
      new: {
        url: "https://",
        prefix: "wp_"
      },
      autofocus: "old-url",
      update: this.update     
    }

    // this.update = this.update.bind(this);

  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header-title">WordPress Migration SQL Maker</h1>
          <p className="header-credit"><a href="https://medium.com/@senning">@senning</a></p>
        </header>
        <main className="body" role="main">
          <SitesContext.Provider value={this.state}>
            <Instance 
              instance="old"
              label="Current Site"
              />
            <Instance 
              instance="new"
              label="New Site"
              />
            <Commands />
          </SitesContext.Provider>
        </main>
      </div>
    );
  }
}

export default App;
