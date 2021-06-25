import React, { Component } from 'react';
import './styles/dataInput.css';

export class DataInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
    }

    handleInput(e) {
        this.setState({
            query: e.target.value
        });
    }

    handleSubmission() {
            this.fakeQuery(this.state.query);
    }

    async fakeQuery() {
        // Replace the random number generator with your business logic
        const result = Math.floor((Math.random() * (100 - 1) + 1));
        this.props.updateValue(result);
        this.props.animateDisplay();
        this.setState({ query: '' });
    }

    render() {
        return (
            <div>
                <p>Click the button to generate a random number between 1 and 100.</p>
                {/* <input type="text" value={this.state.query} onChange={this.handleInput.bind(this)} placeholder="input" required /> */}
                <button onClick={this.handleSubmission.bind(this)}>Submit</button>
            </div>
        )
    }

}

export default DataInput;