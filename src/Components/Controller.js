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
        this.setState({ value: input });
    }

    animateDisplay = () => {
        this.setState({ animateDisplay: this.state.animateDisplay ? false : true })
    }

    render() {
        return (
            <div className="make-box">
                <DataInput
                    updateValue={this.updateValue}
                    animateDisplay={this.animateDisplay}
                />
                <DataDisplay
                    value={this.state.value}
                    updateValue={this.updateValue}
                    animateDisplay={this.state.animateDisplay}
                    toggleAnimation={this.animateDisplay}
                />
            </div>
        )
    }
}

export default Controller;