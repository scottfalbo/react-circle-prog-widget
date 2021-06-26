import React, { Component } from 'react';
import './styles/dataInput.css';

export class DataInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
    }

    // Handles the input from the input form, updating state.query as the user types.
    // This currently has in implementation in the sample app.
    // To use the input form un-comment the element tag in render().
    handleInput(e) {
        this.setState({
            query: e.target.value
        });
    }

    // Handles the button click.  Sends the state.query to a helper function that will retrieve our value.
    // For the sample App it is just a random number generator.  
    // If you want to use custom input rename fakeQuery(query) and start your business logic there.
    handleSubmission() {
            this.fakeQuery(this.state.query);
    }

    async fakeQuery(query) {
        // Replace the random number generator with your business logic
        const result = Math.floor((Math.random() * (100 - 1) + 1));

        // Keep these lines, they set the controller component state.
        this.props.updateValue(result);
        this.props.animateDisplay();
        this.setState({ query: '' });
    }

    render() {
        return (
            <div>
                <p>Click the button to generate a random number.</p>
                {/* input field to take in a query if needed */}
                {/* <input type="text" value={this.state.query} onChange={this.handleInput.bind(this)} placeholder="input" required /> */}
                <button className="make-box" onClick={this.handleSubmission.bind(this)}>Generate Number</button>
            </div>
        )
    }

}

export default DataInput;