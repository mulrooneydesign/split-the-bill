import React, { useState } from 'react';
import classes from './App.module.css'
import InputField from './UI/InputField/InputField'
import Result from './components/Result/Result'
import TipChooser from './components/TipChooser/TipChooser';

const App = () => {

    const [billPrice, setBillPrice] = useState(0)
    const [people, setPeople] = useState(1)
    const [tipPercentage, setTipPercentage] = useState(0)

    const onChangeBillHandler = (event) => {
        setBillPrice(event.target.value)
    }

    const onChangePriceHandler = (event) => {
        setPeople(event.target.value)
    }
    const onChangeTipHandler = (tip, button) => {
        setTipPercentage(tip)
    }


    return (
        <div className={classes.main}>
            <h1>Split the Bill</h1>
            <hr />
            <div className={classes.grid}>
                <div>
                    <InputField icon="€" id="price" type="number" min="0" step="any" name="price" onChange={onChangeBillHandler} title="The Bill" value="00.00"/>
                    <InputField icon="#" id="people" type="number" min="0" step="any" name="people" onChange={onChangePriceHandler} title="Number of People" value="1"/>
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