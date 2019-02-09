import React, { useState, Fragment } from "react";
import s from "./app.component.css";

function MyComponent(props) {
  const [name, setState] = useState("anshul");
  const handleCahnge = e => setState(e.target.value);
  return (
    <Fragment>
      <div className={s.intro}>{name}</div>
      <input value={name} onChange={handleCahnge} />
    </Fragment>
  );
}

export default MyComponent;
