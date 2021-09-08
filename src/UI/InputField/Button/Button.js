import classes from './Button.module.css'

const Button = (props) => {

    return(
        <button className={classes.tipButton} onClick={props.onClick}>{props.title}</button>
    )
}

export default Button