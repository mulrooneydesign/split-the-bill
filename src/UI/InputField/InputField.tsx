import classes from './InputField.module.css';

type InputFieldProps = {
  icon: string;
  id: string;
  min: string;
  name: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  onError: boolean;
  step: string;
  title: string;
  type: string;
  value: number;
};

const InputField = ({
  icon,
  id,
  min,
  name,
  onChange,
  onError,
  step,
  title,
  type,
  value,
}: InputFieldProps) => {
  return (
    <div className={classes['input-field']}>
      <label htmlFor={id}>{title}</label>
      <div className={classes.icon}>{icon}</div>
      <input
        className={onError ? classes.hasError : ''}
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        step={step}
        min={min}
        value={value}
      />
    </div>
  );
};

export default InputField;
