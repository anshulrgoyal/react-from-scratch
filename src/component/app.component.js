import React, { useState, useCallback } from "react";
import s from "./app.component.css";

function MyComponent() {
  const [name, setState] = useState("anshul GoYAL");
  const handleCahnge = useCallback(e => setState(e.target.value));
  return (
    <>
      <div className={s.intro}>{name}</div>
      <input value={name} onChange={handleCahnge} />
    </>
  );
}

export default MyComponent;
