/* Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

Cosa deve fare?

    Restituisce un oggetto con data e ora formattata.
    Si aggiorna automaticamente ogni secondo.
    Usa useEffect() per gestire l’aggiornamento.
 */
import { useState, useEffect } from "react"


function useDate() {

    const [currentDate, setCurrentDate] = useState(() => new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
          setCurrentDate(new Date());
        
        },1000)

        //funzione di pulizia quando il compnente viene smontato
        return ()=> clearInterval(intervalId);
    }, []);
    return currentDate;
}
export default useDate;