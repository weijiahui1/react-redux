import React, { Component } from 'react';

import Counter from './Counter'

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValue = [0, 10, 20];
        const initSum = this.initValue.reduce((a, b)=> a+b, 0);
        this.state = {
            sum: initSum
        }
    }
    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({sum: this.state.sum + valueChange });
    }
    render() {
        return (
        <div style={{border:"1px solid #ccc",backgroundColor:"pink",margin:"20px"}}>
          <Counter caption={"first Count"} onUpdate={this.onCounterUpdate}/>
          <Counter caption={"Second Count"} onUpdate={this.onCounterUpdate} initValue={this.initValue[1]}/>
          <Counter caption={"Third Count"} onUpdate={this.onCounterUpdate} initValue={this.initValue[2]}/>
          <hr/>
          <div>Total Count: {this.state.sum}</div>
        </div>
        )
    }
}