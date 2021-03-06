import React, { Component } from 'react';
import './styles/dataDisplay.css';

export class DataDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      output: 0,
      value: -1,
      final: 0,
      bar: 'progress-circle p0',
      textColor: '',
      outerColor: ''
    };
  }

  //Mounts an interval in the app.  This is used for both the counting number and moving bar.
  componentDidMount() {
    //Set interval speed here to control how quickly the display counts
    this.intervalId = setInterval(() => this.ticker(), 25);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Increments up to the value passed from the input component.
  // Updates the counter and bar class at each value until it reaches the input value.
  ticker = () => {
    this.tickerCount();
    if (this.props.animateDisplay && this.state.output <= this.state.value - 1) {
      this.setState(prev => ({
        output: prev.output + 1,
        final: this.state.output,
        outerColor: this.displayColor(this.state.final)
      }));
      this.progressBar();

    }
    if (this.state.output === this.state.value - 1) {
      this.setState({
        final: this.state.output,
        output: 0
      });
      this.props.toggleAnimation();
    }
  }

  tickerCount = () => {
    this.setState ({ value: this.props.value });
  }

  // Sets the class for the progress bar at each interval
  progressBar = () => {
    if (this.state.output < 51)
      this.setState({ bar: 'progress-circle p' + this.state.output });
    else
      this.setState({ bar: 'progress-circle over50 p' + this.state.output });
  }

  // Sets color for bar and counter based on value.  These can be customized.
  displayColor = (value) => {
    let color;
    if (value >= 0 && value < 25)
      color = 'green';
    else if (value > 24 && value < 50)
      color = 'yellow';
    else if (value > 49 && value < 75)
      color = 'orange';
    else if (value > 74)
      color = 'red';

    this.setState({
      textColor: 'span-' + color,
      outerColor: 'outer-color-' + color
    });
  }

  render() {
    return (
      <section className="circle-prog-widget">
        <div id="circle-container" className={this.state.outerColor}>
          <div className={this.state.bar}>
            <span id="number-display" className={this.state.textColor}>
              {this.state.final}%
            </span>
            <div className="left-half-clipper">
              <div className="first50-bar"></div>
              <div className="value-bar"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DataDisplay;