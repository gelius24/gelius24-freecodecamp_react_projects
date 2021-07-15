import React, { useEffect, useState, useContext } from "react";
import {Context} from './ContextApi'

function Touche({note, on, id, volume}) {
  const [active, setActive] = useState(false)
  const [sound, setSound] = useContext(Context)

  const playSound = () => {
    if (on) {
      const audioTag = document.getElementById(note.keyTrigger)
      setActive(true);
      setSound(id)
      setTimeout(() => setActive(false), 200);
      audioTag.volume = volume
      audioTag.currentTime = 0;
      audioTag.play();
    } else {
      alert("Allumer la machine !")
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === note.keyCode) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <p onClick={playSound}  id={id} className={`${active && 'active'} drum-pad`}>
        {note.keyTrigger}
        <audio src={note.url} className="clip" id={note.keyTrigger}></audio>
      </p>
    </div>
  );
}


export default Touche;
