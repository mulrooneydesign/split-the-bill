import "./InputField.css";

const InputField = (props) => {
  return (
    <div className="input-field">
        <label htmlFor={props.id}>{props.title}</label> 
        <input
        id={props.id}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        />
    </div>
  );
};

export default InputField;
