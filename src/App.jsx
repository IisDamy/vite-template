import { useState } from 'react'
import './App.css'
import Three from '../components/3d/Three'
import GlslTutorial from '../components/3d/GlslTutorial'

function App() {
  const [count, setCount] = useState(0)

  return (  
        <div className="w-screen items-center justify-center h-screen hero">
         
           <GlslTutorial />
        </div>
    
  
  )
}

export default App
