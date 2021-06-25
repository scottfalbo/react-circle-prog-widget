import React, { Component } from 'react';
import DataInput from './DataInput';
import DataDisplay from './DataDisplay';

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
            <DataInput />
            <DataDisplay />
          </div>
        )
    }
}

export default Controller;