import {Component} from 'react'

class Counter extends Component {
  render() {
    const {counter} = this.state
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>{counter} </div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
