import React, { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="conteiner">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <hr />
      <div className={"blocks"}></div>
      {toggle && <div className={"square blue"}>{toggle}</div>}
    </div>
  );
}

export default App;
