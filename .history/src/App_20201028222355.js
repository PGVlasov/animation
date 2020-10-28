import React, { useState } from "react";
import { Transition } from "react-transition-group";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="conteiner">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <hr />
      <div className={"blocks"}></div>
      <Transition
        in={toggle}
        timeout={{ enter: 3000, exit: 1000 }}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log("onEnter")}
      >
        {(state) => <div className={`square blue ${state}`}>{state}</div>}
      </Transition>
    </div>
  );
}

export default App;
