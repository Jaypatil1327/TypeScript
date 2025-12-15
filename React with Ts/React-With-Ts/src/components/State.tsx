import { useState } from "react";

export function State1() {
  const [counter, setCounter] = useState(0); // this will be infer as <number>
  return <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>;
}

type STATUS =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error" };

export function State2() {
  const [stateStatus, changeStatus] = useState<STATUS>({ status: "idle" });
  console.log(stateStatus);

  function makeChange() {
    changeStatus({ status: "loading" });
    // const Pr = await new Promise((res, rej) => {
    setTimeout(() => {
      changeStatus({ status: "success" });
    }, 3000);
    // });
  }
  return <h1 onClick={makeChange}>{stateStatus.status}</h1>;
}
