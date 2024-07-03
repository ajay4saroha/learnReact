import { useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8)
  let [numAllowed,setNumAllowed] = useState(false)
  let [charAllowed,setCharAllowed] = useState(false)
  let [password,setPassword] = useState("")
  let passRef = useRef(null)
  let passGenerator=()=>{
    let pass = ""
    let str ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numAllowed) str += "1234567890"
    if(charAllowed) str += "~!@#$%^&*()"
    for(let i=0;i<length;i++){
      let index = Math.floor(Math.random()*str.length)
      pass+=str[index]
    }
    setPassword(pass)
  }
  useEffect(passGenerator,[length,numAllowed,charAllowed])
  let copyPass = (passRef)=>{
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
    <div className="container-fluid" onLoad={passGenerator}>
      <h1 className='text-center text-decoration-underline'>PASSWORD GENERATOR</h1>
      <div className="container d-flex flex-column justify-content-lg-center">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="********" aria-label="********" aria-describedby="button-addon2" value={password} readOnly ref={passRef}/>
        <button className="btn btn-success" type="button" id="button-addon2" onClick={()=>copyPass()}>Copy</button>
      </div>
        <div className="container d-flex mt-3">
          <input type="range" name="" id="" className= "w-25" value={length} min={8} max={20} onChange={(elem)=>setLength(parseInt(elem.target.value))}/>
          <span>Length : {length}</span>
          <input type="checkbox" name="" id="" className='form-check-input ms-3' onChange={()=>setNumAllowed(!numAllowed)}/>
          <label htmlFor="numberAllowed">Number Allowed</label>
          <input type="checkbox" name="" id="" className='form-check-input ms-3'onChange={()=>setCharAllowed(!charAllowed)}/>
          <label htmlFor="charAllowed">Charcter Allowed</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
