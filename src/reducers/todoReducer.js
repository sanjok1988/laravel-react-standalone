import { INCREMENT, DECREMENT } from "./../action-types";

export default (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count++ };
    case "DECREMENT":
      return { count: state.count-- };
    default:
      return state;
  }
};
