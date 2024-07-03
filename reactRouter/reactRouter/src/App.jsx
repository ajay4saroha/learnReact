import { useState,React } from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)
  function Home(){
    return <h1>HOME</h1>
  }
  function About(){
    return <h1>ABOUT</h1>
  }
  function Contact(){
    return <h1>CONTACT</h1>
  }
  const Router = createBrowserRouter([
    {
      path:'/',
      element: <Home />
    },
    {
      path:'/about',
      element: <About />
    },
    {
      path:'/contact',
      element: <Contact />
    }
  ])
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default App
