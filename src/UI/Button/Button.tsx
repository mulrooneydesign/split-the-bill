import classes from './Button.module.css';

type ButtonProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className={classes['tip-button']} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
