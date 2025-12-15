import { useReducer } from "react";

type CounterState = {
  initial: number;
  step: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT" | "RESET";
};

function init({ initial, step }: CounterState) {
  return { initial, step };
}
function Actions(
  { initial, step }: CounterState,
  action: Action
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { initial: initial + step, step };

    case "DECREMENT":
      return { initial: initial - step, step };

    case "RESET":
      return { initial: 0, step };

    default:
      return { initial, step };
  }
}

function UsingReducer({ initial, step = 1 }: CounterState) {
  const [state, dispatch] = useReducer(Actions, { initial, step }, init);
  return (
    <div>
      <h1>
        {state.initial} using steps of {state.step}
      </h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
}

export default UsingReducer;
