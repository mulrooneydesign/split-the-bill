const Result = ({price, tipPercentage, people}) => {

    const totalWithTip = ((parseInt(price) / 100 ) * parseInt(tipPercentage)) + parseInt(price)
    const totalPerPeronWithTip = (totalWithTip / people).toFixed(2)
    const costPerPerson = (price / people).toFixed(2)

    return(
        <>
        <p>Cost per person is {costPerPerson}</p>
        <p>With a tip of {tipPercentage}%</p>
        <h2>The Total is {totalWithTip}</h2>
        <h2>The Total per person with tip is {totalPerPeronWithTip}</h2>
        </>
    )
}

export default Result