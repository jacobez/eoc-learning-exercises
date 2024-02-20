import { useState, MouseEvent } from "react";
import Puzzle from "../components/Puzzle";

export default function StaleState() {
  const [counter, setCounter] = useState(0);

  const onMouseDown = (event: MouseEvent) => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 100);

    const onMouseUp = () => {
      clearInterval(interval);
    };

    event.target.addEventListener("mouseup", onMouseUp, { once: true });
  };

  return (
    <Puzzle>
      <p>
        When you hold down the button below, the counter should increment once
        every 100ms until you release the button. Figure out why it is not
        working and fix it.
      </p>
      <p>Counter: {counter}</p>
      <button onMouseDown={onMouseDown}>Increment</button>
    </Puzzle>
  );
}
