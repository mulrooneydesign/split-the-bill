import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import InputField from './UI/InputField/InputField';
import Result from './components/Result/Result';
import TipChooser from './components/TipChooser/TipChooser';

const numberValidation = (value: number) => {
  if (
    value !== null &&
    value > 0 &&
    /^[0-9]\d*(\.\d+)?$/.test(value.toString())
  ) {
    return true;
  } else {
    return false;
  }
};

const App = () => {
  const [billPrice, setBillPrice] = useState(1);
  const [people, setPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);

  const [priceError, setPriceError] = useState(false);
  const [peopleError, setPeopleError] = useState(false);

  const onChangePriceHandler = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const { value } = event.target as HTMLInputElement;
    setBillPrice(Number(value));
  };

  const onChangePeopleHandler = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const { value } = event.target as HTMLInputElement;
    setPeople(Number(value));
  };

  const onChangeTipHandler = (tip: number) => {
    setTipPercentage(tip);
  };

  useEffect(() => {
    if (!numberValidation(billPrice)) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }

    if (!numberValidation(people)) {
      setPeopleError(true);
    } else {
      setPeopleError(false);
    }
  }, [billPrice, people]);

  useEffect(() => {
    const buttons = document.getElementsByTagName('button');

    for (const button of buttons) {
      button.addEventListener('click', (item) => {
        for (const button of buttons) {
          button.classList.remove(classes.currentButton);
        }
        if (item.target) {
          (item.target as HTMLButtonElement).classList.add(
            classes.currentButton
          );
        }
      });
    }
  }, []);

  return (
    <div className={classes.main}>
      <h1>Split the Bill</h1>
      <hr />
      <div className={classes.grid}>
        <div>
          <InputField
            icon="€"
            id="price"
            type="number"
            min="0"
            step="any"
            name="price"
            onChange={onChangePriceHandler}
            title="The Bill"
            value={billPrice}
            onError={priceError}
          />
          <InputField
            icon="#"
            id="people"
            type="number"
            min="0"
            step="any"
            name="people"
            onChange={onChangePeopleHandler}
            title="Number of People"
            value={people}
            onError={peopleError}
          />
          {priceError && (
            <p className={classes.error}>
              Price must be numbers and a decimal only.
            </p>
          )}
          {peopleError && (
            <p className={classes.error}>People must be a number only.</p>
          )}
          <TipChooser onSaveTip={onChangeTipHandler} />

          <p>
            Selected tip <strong>{tipPercentage}%</strong>
          </p>
        </div>

        <div className={classes.results}>
          <Result
            price={billPrice}
            people={people}
            tipPercentage={tipPercentage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
