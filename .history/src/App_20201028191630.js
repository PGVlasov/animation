import React, {useState} from "react"
function App() {
const [toggle, setToggle] = useState(true)

  return (
    <div className="conteiner">
      <button onClick={() => setToggle(!toggle)>Toggle</button>
      <hr />
      <div className={"blocks"}></div>
      <div className={"square blue"}></div>
    </div>
  );
}

export default App;
