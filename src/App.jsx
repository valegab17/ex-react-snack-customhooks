import { useState } from 'react'
import useSwitch from './useSwitch'
function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
    
    </>
  )
}

export default App
