import React, { useState } from "react";
import { Transition } from "react-transition-group";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="conteiner">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <hr />
      <div className={"blocks"}></div>
      <Transition in={toggle} timeout={3000}>
        <div className={"square blue"}>{toggle.toString()}</div>}
      </Transition>
    </div>
  );
}

export default App;
