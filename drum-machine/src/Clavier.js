import React from "react";
import {bankOne, bankTwo} from "./banks";
import Touche from "./Touche";
import {sound} from './Touche'

function Clavier({on, bankNumber, volume}) {
  let banknum = null
  bankNumber == 1 ? banknum = bankOne : banknum = bankTwo

  return (
    <div className="display">
      {banknum.map((note) => (
        <Touche note={note} on={on} key={note.keyTrigger} id={note.id} volume={volume} />
      ))}
    </div>
  );
}
export default Clavier;
