/**
 * actions:
 * these are objects that should have two properties,
 * one describing the type of action,
 * and one describing what should be changed in the app state.
 *
 * reducers:
 * these are functions that implement the behavior of the actions.
 * They change the state of the app, based on the action description
 * and the state change description.
 *
 * store:
 * it brings the actions and reducers together, holding
 * and changing the state for the whole app — there is only one store.
 * */
import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../action-types";

class Counter extends Component {
  state = {
    count: 0
  };
  increment = () => {
    //this.props.dispatch(increment());
    this.props.increment();
    //this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    //this.props.dispatch(decrement());
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.increment}>+</button>
        <h2>{this.props.count}</h2>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment,
  decrement
};

//export default Counter;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
