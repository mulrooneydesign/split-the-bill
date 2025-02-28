import classes from './Result.module.css';

type ResultProps = {
  price: number;
  tipPercentage: number;
  people: number;
};

const Result = ({ price, tipPercentage, people }: ResultProps) => {
  const priceFloat = price || 0;
  const tipPercentageFloat = tipPercentage || 0;
  const peopleInt = people || 1; // Default to 1 to avoid division by zero

  const tipAmount = (priceFloat * tipPercentageFloat) / 100;
  const totalWithTip = priceFloat + tipAmount;
  const costPerPerson = priceFloat / peopleInt;
  const totalPerPersonWithTip = totalWithTip / peopleInt;

  return (
    <>
      <p>
        Cost per person without tip is:
        <strong>€{costPerPerson.toFixed(2)}</strong>
      </p>
      <p>
        Add a tip of <strong>{tipPercentage}%</strong>
      </p>
      <h4>The total is:</h4>
      <p className={classes.result}>
        <strong>€{totalWithTip.toFixed(2)}</strong>
      </p>
      <h4>The total per person with tip is:</h4>
      <p className={classes.result}>
        <strong>€{totalPerPersonWithTip.toFixed(2)}</strong>
      </p>
    </>
  );
};

export default Result;
