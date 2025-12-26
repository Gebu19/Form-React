import { useRef,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom' 
import Register from './components/register'

function App() {
  

  return (
    <>
      <Routes >
        
        <Route path='/' element={<Register/>}/>
        <Route path='/deployFormRefReact/' element={<Register/>}/>
      
      </Routes>
    </>
  )
}

export default App
