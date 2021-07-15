import { useState, useContext } from "react";
import "./App.css";
import Clavier from "./Clavier";
import { ContextProvider, Context } from "./ContextApi";

function App() {
  const [on, setOn] = useState(true);
  const [bank, setBank] = useState(false)
  const [bankNumber, selectBankNumber] = useState(1)
  const [sound, setSound] = useContext(Context)
  const [volume, setVolume] = useState(0.5)

  const switchBtn = () => {
    return !on ? setOn(true) : setOn(false);
  };

  const switchBank = () => {
    return !bank ? (setBank(true), selectBankNumber(2)) : (setBank(false), selectBankNumber(1));
  };

  return (
    <div className="app">
      <h1>Drum-Machine</h1>
      <div id="drum-machine">
        <Clavier bankNumber={bankNumber} on={on} volume={volume} />
        {/* power button */}
        <div className="right-side">
          <div className="box">
          <h2>Power</h2>
          <div className="btn" onClick={switchBtn}>
            <div className={`${on ? "on" : "off"}`}></div>
          </div>
          </div>
          {/* power button */}
          <div className="indicator">
            {sound}
          </div>
          
          <div className="box">
            <h2>Volume</h2>
          <input
            type="range"
            step="0.01"
            value={volume}
            max="1"
            min="0"
            className="w-50"
            onChange={(e) => setVolume(e.target.value)}
          />
          </div>
          <div className="box">
          <h2>Bank</h2>
          <div className="btn" onClick={switchBank}>
            <div className={`${!bank ? "bank1" : "bank2"}`}></div>
          </div>
          {!bank ? <h3>1</h3> : <h3>2</h3> }
        </div>
        {/* end right-side div */}
          </div>
          
      </div>
      <footer>Coded By Woody Gelius - 2021</footer>
    </div>
  );
}
export default App;
