import React, { useState } from 'react';
import classes from './App.module.css'
import InputField from './UI/InputField/InputField'
import Result from './components/Result/Result'
import TipChooser from './components/TipChooser/TipChooser';

const numberValidation = (value) => {

    if(value.trim('').length > 0 && /^[1-9]\d*(\.\d+)?$/.test(value)) {
        console.log(value)
        return true
    } else {
        return false
    }
}

const App = () => {

    const [billPrice, setBillPrice] = useState(0)
    const [people, setPeople] = useState(1)
    const [tipPercentage, setTipPercentage] = useState(0)


    const onChangePriceHandler = (event) => {
        console.log(numberValidation(event.target.value))
        setBillPrice(event.target.value)
    }

    const onChangePeopleHandler = (event) => {
        setPeople(event.target.value)
    }

    const onChangeTipHandler = (tip) => {  
        setTipPercentage(tip)
    }

    return (
        <div className={classes.main}>
            <h1>Split the Bill</h1>
            <hr />
            <div className={classes.grid}>
                <div>
                    <InputField icon="€" id="price" type="number" min="0" step="any" name="price" onChange={onChangePriceHandler} title="The Bill" value={billPrice}/>
                    <InputField icon="#" id="people" type="number" min="0" step="any" name="people" onChange={onChangePeopleHandler} title="Number of People" value={people}/>
                    <TipChooser onSaveTip={onChangeTipHandler} />
                    <p>Selected tip <strong>{tipPercentage}%</strong></p>
                </div>

                <div className={classes.results}>
                    <Result price={billPrice} people={people} tipPercentage={tipPercentage}/>
                </div>
            </div>
        </div>
    )
}

export default App