import { ReactNode } from "react";

export interface PuzzleProps {
  children: ReactNode;
}

export default function Puzzle(props: PuzzleProps) {
  return (
    <div>
      <a href="/">
        <span aria-hidden="true">&lt;&nbsp;</span>
        Go back
      </a>
      {props.children}
    </div>
  );
}
