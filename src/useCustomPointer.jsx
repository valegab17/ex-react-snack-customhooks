/* Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

Cosa deve fare?

    Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
    Posiziona il componente al posto del puntatore del mouse.
    Il componente segue i movimenti del mouse.


​
 */

import { useState, useEffect } from "react"
function useCustomPointer(component) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const movePointer = (e) => {
            //uso un hook nativo di js per gestire lo spostamento del cursore
            setPosition({ x: e.clientX, y: e.clientY })

        }
        document.addEventListener("mousemove", movePointer)

        //faccio la mia cleanup function
        return () => document.removeEventListener("mousemove", movePointer)

    }, [])

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)"

            }}>
            {component}
        </div>
    )
}

export default useCustomPointer