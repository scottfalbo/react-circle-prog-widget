import React, { Component } from 'react';
import DataInput from './DataInput';
import DataDisplay from './DataDisplay';
import './styles/controller.css';

export class Controller extends Component {
  
    state = {
        value: -1,
        animateDisplay: false
    }

    updateValue = (input) => {
        this.setState({
            threatLevel : input
        });
    }

    animateDisplay = () => {
        this.setState({
            animateDisplay: this.state.animateDisplay ? false : true
        })
    }

    render() {
        return (
          <div>
            <DataInput 
              updateValue = { this.updateValue }
              animateDisplay = { this.animateDisplay }
            />
            <DataDisplay />
          </div>
        )
    }
}

export default Controller;