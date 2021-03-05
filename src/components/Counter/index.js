import React, {Component} from 'react'

class Counter extends Component {
  onIncrement() {}

  onDecrement() {}

  render() {
    return (
      <div>
        <div onClick={this.onDecrement}>-</div>
        <div>{this.state.counter}</div>
        <div onClick={this.onIncrement}>+</div>
      </div>
    )
  }
}

export default Counter
