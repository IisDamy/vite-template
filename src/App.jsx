import { useState } from 'react'
import './App.css'
import Three from '../components/3d/Three'

function App() {
  const [count, setCount] = useState(0)

  return (  
        <div className="w-screen items-center justify-center h-screen hero">
         
           <Three />
        </div>
    
  
  )
}

export default App
