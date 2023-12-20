import { useReducer, useState } from "react";
import { reducer } from "./reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
  });

  console.log(state);

  return (
    <>
      <h1>{state.text}</h1>
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "incremented_count", countAmount: 10 })}
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: "change_text" })}>
        Change text
      </button>
    </>
  );
}

export default App;
