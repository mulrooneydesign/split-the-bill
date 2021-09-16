import classes from "./InputField.module.css";

const InputField = (props) => {

  return (
    <div className={classes['input-field']}>
        <label htmlFor={props.id}>{props.title}</label> 
        <div className={classes.icon}>{props.icon}</div>
        <input
        className={props.onError ? classes.hasError : ''}
        id={props.id}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        step={props.step}
        min={props.min}
        value={props.value}
        />
    </div>
  );
};

export default InputField;
