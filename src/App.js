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
    const onChangeTipHandler = (tip) => {
        setTipPercentage(tip)
    }


    return (
        <div className={classes.main}>
            <h1>Split the Bill</h1>
            <div className={classes.grid}>
                <div>
                    <TipChooser onSaveTip={onChangeTipHandler} />
                    <p>Selected tip {tipPercentage}%</p> 
                    <InputField id="price" type="number" name="price" onChange={onChangeBillHandler} title="The Bill" />
                    <InputField id="people" type="number" name="people" onChange={onChangePriceHandler} title="Number of People" />
                </div>

                <div>
                    <Result price={billPrice} people={people} tipPercentage={tipPercentage}/>
                </div>
            </div>
        </div>
    )
}

export default App