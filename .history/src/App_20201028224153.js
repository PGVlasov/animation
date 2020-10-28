import React, { useState } from "react";
import { Transition } from "react-transition-group";

function App() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(true);

  return (
    <div className="conteiner">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggle2(!toggle2)}>Toggle2</button>
      <hr />
      <div className={"blocks"}></div>
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

      <div className="square orange">{toggle2.toString()}</div>
    </div>
  );
}

export default App;
