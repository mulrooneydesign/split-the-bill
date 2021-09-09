import classes from './Result.module.css'

const Result = ({price, tipPercentage, people}) => {
    //to fixed is rounding down too early perhaps?
    const totalWithTip = (((parseInt(price) / 100 ) * parseInt(tipPercentage)) + parseInt(price)).toFixed(2)
    const totalPerPeronWithTip = (totalWithTip / people).toFixed(2)
    const costPerPerson = (price / people).toFixed(2)

    return(
        <>
        <p>Cost per person is: <strong>€{costPerPerson}</strong></p>
        <p>Add a tip of <strong>{tipPercentage}%</strong></p>
        <h4>The Total is:</h4>
        <p className={classes.result}><strong>€{totalWithTip}</strong></p>
        <h4>The Total per person with tip is:</h4>
        <p className={classes.result}>€{totalPerPeronWithTip}</p>
        </>
    )
}

export default Result