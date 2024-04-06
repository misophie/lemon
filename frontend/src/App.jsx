import './App.css'
import { Homepage } from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'

function App() {

  return (
    <Routes>
       <Route path="/" element={<Landing />}/>

      <Route path="/home" element={<Homepage />} />

    </Routes>
 
  )
}

export default App
