import React, { Component } from 'react';
import Controller from './Components/Controller'
import './App.css';

export class App extends Component {

  state = {
    showAbout: false
  };

  // Toggles the AboutMe window on and off.  This code is unrelated to the widget.
  handleSubmission() {
    this.setState({
      showAbout: this.state.showAbout ? false : true
    });
    console.log(this.state.showAbout);
  }

  render() {
    return (
      <main>
        <h1 className="make-box">React Circular Progress Widget</h1>
        <p>This circular progress widget takes in a value between 1 and 100.  The progress wheel then loads and counts up to the value, changing colors every 25%.  Please see the README for implementation instructions.</p>
        <Controller />
        
        <a href="https://github.com/scottfalbo/react-circle-prog-widget" target="_blank"><div className="link-button">GitHub Repository</div></a>
      </main>
    );
  }
}

export default App;
