import React, { useReducer } from "react";
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
export default function Example() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <h2>To Do List </h2> */}
      <h2>{state.count}</h2>
      {/* <input value="" placeholder="input to do ..."></input> */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      {/* <ul>
        <li>学习react</li>
        <li>学习react</li>
        <li>学习react</li>
      </ul> */}
    </div>
  );
}
