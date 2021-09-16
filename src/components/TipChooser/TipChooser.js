import Button from "../../UI/Button/Button";
import classes from './TipChooser.module.css'

const TipChooser = (props) => {

  const tipHandler = props.onSaveTip 

  return (
    <>
        <h2 className={classes.title}>Add a tip</h2>
        <Button title="None" percentage="0" onClick={() => tipHandler(0)}/>
        <Button title="10%" percentage="10" onClick={() => tipHandler(10)}/>
        <Button title="12%" percentage="12" onClick={() => tipHandler(12)}/>
        <Button title="15%" percentage="15" onClick={() => tipHandler(15)}/>
        <Button title="25%" percentage="25" onClick={() => tipHandler(25)}/>
    </>
  );
};

export default TipChooser;
