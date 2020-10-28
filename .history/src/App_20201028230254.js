import React, { useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import { List } from "./List";

function App() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [] = useState([
    { id: 1, title: "Item1" },
    { id: 1, title: "Item1" },
    { id: 1, title: "Item1" },
  ]);

  return (
    <div className="conteiner">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggle2(!toggle2)}>Toggle2</button>
      <hr />
      <div className={"blocks"}>
        <Transition
          in={toggle}
          timeout={{ enter: 3000, exit: 4000 }}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => <div className={`square blue ${state}`}>{state}</div>}
        </Transition>
        <CSSTransition
          in={toggle2}
          timeout={3000}
          classNames={"os"}
          mountOnEnter
          unmountOnExit
        >
          <div className="square orange">{toggle2.toString()}</div>
        </CSSTransition>
      </div>
      <div className={"blocks"}>
        <List />
      </div>
    </div>
  );
}

export default App;
