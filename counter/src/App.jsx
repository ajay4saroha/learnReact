import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let increment = ()=>{
    setCount(++count)
    setCount(++count)
    setCount(++count)
    setCount(++count)
    setCount(++count)
    setCount(++count)
  }
  let decrement = ()=>{
    setCount(--count)
    
  }
  return (
    <>
    <h1>
      {count}
    </h1>
    <button onClick={increment}>INCREASE VALUE</button>
    <button onClick={decrement}>DECREASE VALUE</button>
    </>
  )
}

export default App
