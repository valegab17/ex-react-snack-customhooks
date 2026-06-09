/* 🎯 Bonus: useKeyPress() – Rilevare un Tasto Premuto

Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

Cosa deve fare?

    Prende in input il nome di un tasto ("Enter", "Escape", ecc.).
    Ritorna true quando il tasto è premuto e false quando viene rilasciato.
    Usa event listener su keydown e keyup.


  */
import { useState, useEffect } from "react";

function useKeyPress(targetKey) {
  const [isPressed, setIsPressed] = useState(false);
  useEffect(() => {
    //al mmount mi faccio una funzione handleKeyDown
    const handleKeyDown = e => {

      if ((e.key === targetKey)) setIsPressed(true)
    }
    const handleKeyUp = e => {

      if ((e.key === targetKey)) setIsPressed(false)
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () =>{
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    }
  })
  return isPressed;
}

export default useKeyPress;