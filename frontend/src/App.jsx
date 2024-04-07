import './App.css'
import { Homepage } from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { GoalReport } from './pages/GoalReport'

function App() {

  return (
    <Routes>
       <Route path="/" element={<Landing />}/>

      <Route path="/home" element={<Homepage />} />

      <Route path="/report" element={<GoalReport />} />

    </Routes>
 
  )
}

export default App
