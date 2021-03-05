import React, {Component} from 'react'

/**
 * 🏆
 * Here we have a Counter component that display the current value of the counter
 * It also has two buttons to increase ('+') or decrease('-') the counter.
 * The counter value will be stored in the state.
 * You need to update the state to add 1 to the counter when
 * "+" is clicked and substract 1 to the current when "-" is clicked
 */
class Counter extends Component {
  /**
   * ✏️
   * Initialize a state here with initial value of counter set to 0
   *
   */

  /**
   *💡
   * This method will be called when the user clicks "+" button to increase the counter
   */
  onIncrement() {}

  /**
   *💡
   * This method will be called when the user clicks "-" button to decrease the counter
   */
  onDecrement() {}

  /**
   * ✏️
   * Use componentDidMount lifecycle method to fetch movies data profile
   * information for given stock ticker using the DataAPI provided
   * 🧭  Add lifecycle method called componentDidMount
   * 🧭  Inside that method you need to use the DataAPI that's already imported.
   *     Make a call to `getCompanyProfile()` method and pass the `stockTicker` from the props.
   *     This method will return a promise that resolves into `companyProfile` info
   * 🧭  Using the data from the promise use `setState` to set companyProfileInfo
   *    like - `this.setState({ companyProfileInfo: data })`
   * 🧭  What if the promise resolves into an error? You might want to catch the error
   *     and do something with it (Remember .catch in Promise). For example below I'm
   *     catching an error and just logging it in console. You can do the same for the
   *     sake of this exercise:
   *          fetch(url)
   *             .then(data => doSth(data))
   *             .catch(error => console.log(error))
   * */

  componentDidMount() {}

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

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 */

export default Counter
