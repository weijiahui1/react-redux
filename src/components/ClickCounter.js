import React, { Component } from 'react';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.onCLickButton = this.onCLickButton.bind(this);
    }
    onCLickButton() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.onCLickButton}>Click Me</button>
                <div>
                    Click Count: {this.state.count}
                </div>
            </div>
        )
    }
}
export default ClickCounter