import React, {Component} from 'react'

class Counter extends Component {
  onIncrement() {}

  onDecrement() {}

  render() {
    return (
      <div style={style.container}>
        <div style={style.buttons} onClick={this.onDecrement}>
          -
        </div>
        <div style={style.counter}>{this.state.counter}</div>
        <div style={style.buttons} onClick={this.onIncrement}>
          +
        </div>
      </div>
    )
  }
}

export default Counter
