import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initValue
        };
        this.onCLickIncrementButton = this.onCLickIncrementButton.bind(this);
        this.onCLickDecrementButton = this.onCLickDecrementButton.bind(this);
    }
    onCLickIncrementButton() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.updateCount(true);
    }
    onCLickDecrementButton() {
        // this.setState({
        //     count: this.state.count - 1
        // })
        this.updateCount(false);
    }
    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue+1: previousValue-1;
        this.setState({count: newValue})
        this.props.onUpdate(newValue, previousValue)
    }
    render() {
        const {caption} = this.props;
        return (
            <div>
                <button onClick={this.onCLickIncrementButton}>+</button>
                <button onClick={this.onCLickDecrementButton}>-</button>
                <div>
                    {caption}: {this.state.count}
                </div>
            </div>
        )
    }
}
Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f
}
export default Counter

