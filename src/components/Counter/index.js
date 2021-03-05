import React, {Component} from 'react'

class Counter extends Component {
  onIncrement() {}

  onDecrement() {}

  render() {
    return (
      <div>
        <div onClick={this.onDecrement}>-</div>
        <div style={stylessssss.counter}>{this.state.counter}</div>
        <div style={buttons} onClick={this.onIncrement}>
          +
        </div>
      </div>
    )
  }
}

export default Counter
