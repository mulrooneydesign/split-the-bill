import classes from './Result.module.css'

const Result = ({price, tipPercentage, people}) => {

    const priceInt = parseFloat(price)
    const tipPercentageInt = parseFloat(tipPercentage)
    const peopleInt = parseFloat(people)


    const totalWithTip = (((priceInt / 100 ) * tipPercentageInt) + priceInt)
    const totalPerPeronWithTip = (totalWithTip / peopleInt)
    const costPerPerson = (priceInt / peopleInt)

    return(
        <>
        <p>Cost per person without tip is: <strong>€{costPerPerson.toFixed(2)}</strong></p>
        <p>Add a tip of <strong>{tipPercentage}%</strong></p>
        <h4>The Total is:</h4>
        <p className={classes.result}><strong>€{totalWithTip.toFixed(2)}</strong></p>
        <h4>The Total per person with tip is:</h4>
        <p className={classes.result}>€{totalPerPeronWithTip.toFixed(2)}</p>
        </>
    )
}

export default Result