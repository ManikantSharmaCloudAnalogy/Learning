import { useState } from "react";
import "./App.css";
import { Toggle } from "./components/Toggle";
import { Concept } from "./components/Concept";
import { FormStatus } from "./components/FormStatus";
import { Transition } from "./components/Transition";
import { DerivedState } from "./components/DerivedState";
import { College } from "./components/contextapi/College";
import { subjectContext } from "./components/contextapi/ContextData";
import App2 from "./components/fetchdata/App2";
import ToDo from "./components/ToDo";
import useToggle from "./components/useToggle";
import { ApiCall } from "./components/apiCall";
import { Memo } from "./components/Memo";
import { FormHandling } from "./components/FormHandling";
function App() {
  let [subject, setSubject] = useState("");
  const [val, toggleVal] = useToggle(true);
  return (
    <>
      <h2>toggle effect </h2>
      <h3>hello toggle</h3>
      <Toggle />
      <hr></hr>
      <h2>concept practise</h2>
      <Concept />
      <hr></hr>
      <h2>useActionState Hook</h2>
      <FormStatus />
      <hr></hr>
      <h3>UseTransition Hook</h3>
      <Transition />
      <hr></hr>
      <h3>Derived State concept</h3>
      <DerivedState />
      <hr></hr>
      <hr></hr>
      <div style={{ backgroundColor: "yellow", padding: "10px" }}>
        <subjectContext.Provider value={subject}>
          <h1>context api</h1>
          <select
            defaultValue={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value=""></option>
            <option value="English">English </option>
            <option value="C">C </option>
            <option value="MERN">MERN </option>
          </select>
          <College />
        </subjectContext.Provider>
      </div>
      <ToDo />
      <hr></hr>
      <h1>custom hook toggle </h1>
      <button onClick={toggleVal}>Toggle Heading</button>
      <button onClick={()=>toggleVal(false)}>Hide Heading</button>
      <button onClick={()=>toggleVal(true)}> Show Heading </button>
      {
        val?<h1>hello manikant</h1>:null
      }
      <hr></hr>
      <h3>useEffect hook working</h3>
      <App2/>
      <hr></hr>
      <ApiCall />
      <hr></hr>
      <h3>memo hook implementation </h3>
      <Memo />
      <hr></hr>
      <FormHandling />
    </>
  );
}

export default App;
