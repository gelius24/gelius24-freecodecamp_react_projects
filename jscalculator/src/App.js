import { useState } from "react";
import "./App.css";


// const regle_decimal = /.{,1}/
let startVal = 0

function App() {
  const [operation, setOperation] = useState([]);
  const [displayedNum, setDisplayedNum] = useState([]);

  const setNumber = (e) => {
    if (!displayedNum || displayedNum === "X" || displayedNum === "/" || displayedNum === "-" || displayedNum === "+") {
      // console.log('un autre nombre tapé.')
      setDisplayedNum([e.target.innerHTML]);
      setOperation([...operation, e.target.innerHTML].join(""));
      
    } else if (displayedNum && (!startVal && e.target.innerHTML !== '0' || displayedNum.length > 0)) {
      startVal = null
      // console.log(displayedNum)
      // console.log('chiffre tapé.')
      setDisplayedNum([...displayedNum, e.target.innerHTML]);
      setOperation([...operation, e.target.innerHTML].join(""));
    }
    
    
  };

  const handleFunctions = (e) => {
    if (e.target.innerHTML === "AC") {
      startVal = 0;
      setDisplayedNum([]);
      setOperation([]);
    }
    if (e.target.innerHTML === "/") {
      if (operation.includes('=')){
        setOperation([eval(operation)[operation.length - 1], ' / '])
        setDisplayedNum(e.target.innerHTML);
      }else{
        setDisplayedNum(e.target.innerHTML);
        setOperation([...operation + " / "].join(""));
      }
      if([...operation + " / "].join("").includes(' *  / ')){
        console.log('!!!!!!!')
        setOperation([...operation + " / "].join("").replace(' *  / ', ' / '))
      } else if([...operation + " / "].join("").includes(' -  / ')){
        console.log('!!!!!!!')
        setOperation([...operation + " / "].join("").replace(' -  / ', ' / '))
      } else if([...operation + " / "].join("").includes(' +  / ')){
        console.log('!!!!!!!')
        setOperation([...operation + " / "].join("").replace(' +  / ', ' / '))
      }
      else if([...operation + " / "].join("").includes(' /  / ')){
        console.log('!!!!!!!')
        setOperation([...operation + " / "].join("").replace(' /  / ', ' / '))
      }
    }
    if (e.target.innerHTML === "X") {
      if (operation.includes('=')){
        setOperation([eval(operation)[operation.length - 1], ' * '])
        setDisplayedNum(e.target.innerHTML);
      }else{
        setDisplayedNum(e.target.innerHTML);
        setOperation([...operation + " * "].join(""));
      }
      if([...operation + " * "].join("").includes(' /  * ')){
        setOperation([...operation + " * "].join("").replace(' /  * ', ' * '))
      }  else if([...operation + " * "].join("").includes(' +  * ')){
        setOperation([...operation + " * "].join("").replace(' +  * ', ' * '))
      }
    }
    if (e.target.innerHTML === "-") {
      if (operation.includes('=')){
        setOperation([eval(operation)[operation.length - 1], ' - '])
        setDisplayedNum(e.target.innerHTML);
      }else{
        setDisplayedNum(e.target.innerHTML);
        setOperation([...operation + " - "].join(""));
      }
      //  if([...operation + " - "].join("").includes(' *  - ')){
      //    console.log('!!!!!!!')
      //    setOperation([...operation + " - "].join("").replace(' *  - ', ' * - '))
      //  } 
      // else if([...operation + " - "].join("").includes(' +  - ')){
      //   setOperation([...operation + " - "].join("").replace(' +  - ', ' - '))
      // }
    }

    if (e.target.innerHTML === "+") {
      if (operation.includes('=')){
        setOperation([eval(operation)[operation.length - 1], ' + '])
        setDisplayedNum(e.target.innerHTML);
      }else{
        setDisplayedNum(e.target.innerHTML);
        setOperation([...operation + " + "].join(""));
      }
      if([...operation + " + "].join("").includes(' /  + ')){
        setOperation([...operation + " + "].join("").replace(' /  + ', ' + '))
      } 
      else if([...operation + " + "].join("").includes(' -  + ')){
        setOperation([...operation + " + "].join("").replace(' -  + ', ' + '))
        console.log('ok>>>', operation)
        if(operation.includes(' *  - ')){
          console.log('woody')
          setOperation([...operation + " + "].join("").replace(' *  -  + ', ' + '))
          console.log(operation)
        }
      } 
      
      else if([...operation + " + "].join("").includes(' +  + ')){
        setOperation([...operation + " + "].join("").replace(' +  + ', ' + '))
      }
       else if([...operation + " + "].join("").includes(' *  + ')){
        setOperation([...operation + " + "].join("").replace(' *  + ', ' + '))
      }
    }
    if (e.target.innerHTML === "=") {
      setDisplayedNum(eval(operation));
      setOperation([...operation , '=', eval(operation)])
    }
    if (e.target.innerHTML === ".") {
      if(!displayedNum.includes('.')){
        setDisplayedNum([...displayedNum, e.target.innerHTML]);
        setOperation([...operation, e.target.innerHTML].join(""));
      }
    }
  };

  const buttons = [
    { value: null, display: ".", id: "decimal" },
    {display: "0", id: "zero" },
    {display: "1", id: "one" },
    {display: "2", id: "two" },
    {display: "3", id: "three" },
    {display: "4", id: "four" },
    {display: "5", id: "five" },
    {display: "6", id: "six" },
    {display: "7", id: "seven" },
    {display: "8", id: "eight" },
    {display: "9", id: "nine" },
    { value: null, display: "AC", id: "clear" },
    { value: null, display: "/", id: "divide" },
    { value: null, display: "X", id: "multiply" },
    { value: null, display: "-", id: "subtract" },
    { value: null, display: "+", id: "add" },
    { value: null, display: "=" },
  ];
  const row1 = buttons.slice(11, 14);
  const row2 = buttons.slice(8, 11).concat(buttons[14]);
  const row3 = buttons.slice(5, 8).concat(buttons[15]);
  const row4 = buttons.slice(2, 5);
  const row5 = buttons.slice(0, 2).reverse();
  return (
    <div className="container">
    <div className="app">
      <div className="screen">
        <div className="eq" id='eq'>
          {operation.length > 0 || operation ? operation : ""}
        </div>
        <p id='display'>{displayedNum.length === 0 ? startVal : displayedNum}</p>
      </div>
      <div className="row1">
        {row1.map((btn) => (
          <p className="btn" id={btn.id} key={btn.id} onClick={handleFunctions}>
            {btn.display}
          </p>
        ))}
      </div>
      <div className="row2">
        {row2.map((btn) => (
          btn.id !== 'subtract' ?
          <p className="btn" id={btn.id} key={btn.id} onClick={setNumber}>
            {btn.display}
          </p>
          :
          <p className="btn" id={btn.id} key={btn.id} onClick={handleFunctions}>
            {btn.display}
          </p>
        ))}
      </div>
      <div className="row3">
        {row3.map((btn) => (
          btn.id !== 'add' ?
          <p className="btn" id={btn.id} key={btn.id} onClick={setNumber}>
            {btn.display}
          </p>
          :
          <p className="btn" id={btn.id} key={btn.id} onClick={handleFunctions}>
            {btn.display}
          </p>
        ))}
      </div>
      <div className="row4">
        {row4.map((btn) => (
          <p className="btn" id={btn.id} key={btn.id} onClick={setNumber}>
            {btn.display}
          </p>
        ))}
      </div>
      <div className="row5">
        {row5.map((btn) => (
          btn.id !== 'decimal' ?
          <p className="btn" id={btn.id} key={btn.id} onClick={setNumber}>
            {btn.display}
          </p>
          :
          <p className="btn" id={btn.id} key={btn.id} onClick={handleFunctions}>
            {btn.display}
          </p>
        ))}
      </div>
      <div className="btn" id="equals" onClick={handleFunctions}>
        {buttons[16].display}
      </div>
    </div>
    <footer>Codé par Woody Gelius - 2021</footer>
    </div>
  );
}

export default App;
