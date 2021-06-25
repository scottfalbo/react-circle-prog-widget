import React from 'react';

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
        // This set state disables the user input, remove to require a query if needed
        this.setState({ query: 'whatever' })

        if (this.state.query !== '')
            this.fakeQuery(this.state.query);
    }

    async fakeQuery(query) {
        // Replace the random number generator with your business logic
        const result = Math.floor((Math.random() * (100 - 1) + 1));

        this.props.updateValue(result);
        this.props.animateDisplay();
        this.setState({ query: '' });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.query} onChange={this.handleInput.bind(this)} placeholder="input" required />
                <button onClick={this.handleSubmission.bind(this)}>Submit</button>
            </div>
        )
    }

}

export default DataInput;