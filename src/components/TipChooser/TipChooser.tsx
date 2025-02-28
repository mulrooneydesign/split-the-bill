import Button from '../../UI/Button/Button';
import classes from './TipChooser.module.css';

const TipChooser = ({
  onSaveTip,
}: {
  onSaveTip: (percentage: number) => void;
}) => {
  const tipHandler = onSaveTip;

  return (
    <>
      <h2 className={classes.title}>Add a tip</h2>
      <Button title="None" onClick={() => tipHandler(0)} />
      <Button title="10%" onClick={() => tipHandler(10)} />
      <Button title="12%" onClick={() => tipHandler(12)} />
      <Button title="15%" onClick={() => tipHandler(15)} />
      <Button title="25%" onClick={() => tipHandler(25)} />
    </>
  );
};

export default TipChooser;
