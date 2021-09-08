import Button from "../../UI/InputField/Button/Button";

const TipChooser = (props) => {

   const tipHandler = props.onSaveTip 

  return (
    <>
        <p>Add a tip</p>
        <Button title="No Tip" percentage="0" onClick={() => tipHandler(0)}/>
        <Button title="10%" percentage="10" onClick={() => tipHandler(10)}/>
        <Button title="12%" percentage="12" onClick={() => tipHandler(12)}/>
        <Button title="15%" percentage="15" onClick={() => tipHandler(15)}/>
        <Button title="25%" percentage="25" onClick={() => tipHandler(25)}/>
    </>
  );
};

export default TipChooser;
