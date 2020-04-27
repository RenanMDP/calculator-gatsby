import React, {useState} from "react";

export default () => {
  const [ input1, setInput1 ] = useState();
  const [ input2, setInput2 ] = useState();
  const [ operation, setOperation ] = useState("add");
  // const [ classNames, setClassNames] = useState("");

  const handleInput1 = (event) => {
    const newInput = event.target.value;

    setInput1(prevResult => newInput);
  };

  const handleInput2 = (event) => {
    const newInput = event.target.value;

    setInput2(prevResult => newInput);
  };

  const operationSwitch = () => {
    switch (operation) {
      case "add":
        return parseInt(input1) + parseInt(input2);
        break;
      case "subtract":
        return parseInt(input1) - parseInt(input2);
        break;
      case "multiply":
        return parseInt(input1) * parseInt(input2);
        break;
      case "divide":
        return parseInt(input1) / parseInt(input2);
        break;
    }
  };

  const buttonOperation = {
    add: (event) => {
      event.preventDefault();
      setOperation(newOperation => newOperation = "add");
      // setClassNames(newClassNames => newClassNames = 'addBg');
    },
    subtract: (event) => {
      event.preventDefault();
      setOperation(newOperation => newOperation = "subtract");
      // setClassNames(newClassNames => newClassNames = 'subtractBg');
    },
    multiply: (event) => {
      event.preventDefault();
      setOperation(newOperation => newOperation = "multiply");
      // setClassNames(newClassNames => newClassNames = 'multiplyBg');
    },
    divide: (event) => {
      event.preventDefault();
      setOperation(newOperation => newOperation = "divide");
      // setClassNames(newClassNames => newClassNames = 'divideBg');
    }
  };

  return (
    <div id="main-grid">
      <main>
        <div id="main-content">
          <input id="input1" type="number" name="input1" value={input1} onChange={handleInput1} />
          <div id="opBtns">
            <button id="add" onClick={buttonOperation.add} data-selected={operation === "add"}>+</button>
            <button id="subtract" onClick={buttonOperation.subtract} data-selected={operation === "subtract"}>-</button>
            <button id="multiply" onClick={buttonOperation.multiply} data-selected={operation === "multiply"}>*</button>
            <button id="divide" onClick={buttonOperation.divide} data-selected={operation === "divide"}>/</button>
          </div>
          <input id="input2" type="number" name="input2" value={input2} onChange={handleInput2} />
          <h1>=</h1>
          <input id="result" type="number" name="result" value={operationSwitch()}  />
        </div>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );  
};