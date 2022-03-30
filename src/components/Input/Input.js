import { useState } from "react";

export default function Input(props) {
  const [summonnerName, setSummonnerName] = useState("");
  function onChangeHandler(e) {
    setSummonnerName(e.target.value.trim());
  }
  return (
    <div className={`${props.class}`}>
      <div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id={props.id}
            placeholder={props.placeholder}
            value={summonnerName}
            onChange={onChangeHandler}
          />
          <label htmlFor={props.id}>{props.Content}</label>
        </div>
      </div>
    </div>
  );
}
