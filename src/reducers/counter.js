const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  console.log("reducer: ", state, action);
  switch (action.type) {
    case "INCREMENT":
      console.log(state.count);
      return { count: state.count + 1 };

    case "DECREMENT":
      console.log(state.count);
      return { count: state.count - 1 };

    default:
      return state;
  }
};
