import React, { Component } from 'react';
import Controller from './Components/Controller'
import './App.css';

export class App extends Component {

  state = {
    showAbout : false
  };

  handleSubmission() {
    this.setState ({
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
        <button className="make-box" onClick={this.handleSubmission.bind(this)}>About</button>
        <div className="screen-dim">
          <section className="about-me">
            <figure>
              <img src="#" alt="Scott Falbo"/>
              <figcaption>Software Developer | Artist</figcaption>
            </figure>
            <p>about me blah blah blah</p>
            <section className="social">
              <p>email</p>
              <ul>
                <li>
                  <a href="" target="_blank"><img src="#" alt="LinkedIn"/></a>
                </li>
                <li>
                  <a href="" target="_blank"><img src="#" alt="GitHub"/></a>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
