import { useState } from "react";
export function Toggle() {
  const [text, setText] = useState(false);
  return (
    <div>
      <button onClick={()=>setText(!text)}>
        Click Me
      </button>
    {text &&  <p>Hello Mani</p>}
    </div>
  );
}