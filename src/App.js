import React, { Component } from 'react';
import Controller from './Components/Controller'
import './App.css';

export class App extends Component {

  state = {
    showAbout: false
  };

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
        <button className="make-box" onClick={this.handleSubmission.bind(this)}>About</button>
        <div className={this.state.showAbout ? "screen-dim" : "screen-dim hide-me"}>
          <section className="about-me">
            <div>
              <figure>
                <img src="./images/selfie.jpg" alt="Scott Falbo" />
              </figure>
              <section className="social">
                <ul>
                  <li>
                    <a href="mailto:scottfalboart@gmail.com">scottfalboart@gmail.com</a>
                  </li>
                  <li>
                    <a href="https://www.scottfalbo.com" target="_blank" rel="noreferrer">scottfalbo.com</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/scott-falbo/" target="_blank" rel="noreferrer"><img src="./images/linkedIn-black.png" alt="LinkedIn" /></a>
                  </li>
                  <li>
                    <a href="https://github.com/scottfalbo" target="_blank" rel="noreferrer"><img src="./images/github.png" alt="GitHub" /></a>
                  </li>
                </ul>
              </section>
            </div>
            <article>Hello, my name is Scott Falbo, I'm a software developer and artist in Seattle.
              <br/>
              I'm a huge gamer nerd that loves coding.  Learning a new language or technologies to solve a problem domain is basically studying ancient tongues to scribe spells.  HttpRequest, more like Neo-Electrical Telekinesis.  Writing code is wizardry, and who doesn't want to be a wizard.
              <br/>
              As a long time end game MMO gamer and puzzler I enjoy solving problems and organizing solutions.  I find great satisfaction in laying out repository patterns in .NET or figuring out entity relations for a database.  When everything works out it's like beating a level of a game.  If things don't work out it's a learning experience until they do.
              <br/>
              While I enjoy puzzling and problem solving I'm also a career artist with a passion for visual creation.  With a firm understanding of composition and color theory I also enjoy building attractive, accessible and functional front ends.
              <br/>
              Thanks for looking, let's write some spells!
            </article>
            <button className="make-box" onClick={this.handleSubmission.bind(this)}>close</button>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
