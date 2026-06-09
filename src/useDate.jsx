/* Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

Cosa deve fare?

    Restituisce un oggetto con data e ora formattata.
    Si aggiorna automaticamente ogni secondo.
    Usa useEffect() per gestire l’aggiornamento.
 */
import { useState, useEffect } from "react"


function useDate() {
    const [date, setDate] = useState(()=> new Date().toLocaleDateString())
    const [time, setTime] = useState(() => new Date().toLocaleTimeString())
    useEffect(()=>{
        
    }, [])
    return
}

export default useDate