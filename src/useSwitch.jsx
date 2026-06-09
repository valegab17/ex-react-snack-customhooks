import { useState } from "react"


/* Creare un custom hook per alternare un valore booleano tra true e false.

Cosa deve fare?

    Inizialmente false.
    Ritorna il valore attuale e una funzione toggle() per cambiarlo.
    Quando toggle() viene chiamato, il valore passa da true → false e viceversa.

Esempio di utilizzo: */
function useSwitch(){
const [value, setValue] = useState(false);
const toggle = () =>{
    setValue(prev => !prev);
};

return [value, toggle]


}

export default useSwitch