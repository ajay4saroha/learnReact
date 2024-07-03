import { useState } from 'react'
import './App.css'
import Colorbar from './components/ColorBar/Colorbar'

function App() {
  const [color,setColor] = useState('black')
  
  return (
    <>
    <div className="container-fluid " style={{backgroundColor:color,height:'100vh'}}>
        <Colorbar color={color} setColor={setColor}/>
    </div>
    </>
  )
}

export default App
