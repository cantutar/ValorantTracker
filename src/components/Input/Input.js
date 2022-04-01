export default function Input(props) {
  return (
    <div className={`${props.class}`}>
      <div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
          />
          <label htmlFor={props.id}>{props.Content}</label>
        </div>
      </div>
    </div>
  );
}
