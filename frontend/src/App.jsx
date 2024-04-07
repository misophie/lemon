import './App.css'
import { Homepage } from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'
<<<<<<< HEAD
import { GoalReport } from './pages/GoalReport'
=======
import { GroupForm } from './pages/GroupForm'
import { GoalSuggestion } from './pages/GoalSuggestion'
import { ThemeProvider } from '@mui/material/styles';
import { CreateAccountForm } from './pages/CreateAccountForm'
import { ChooseTheme } from './pages/ChooseTheme'
import { AboutUs } from './pages/AboutUs'
import theme from './theme'
>>>>>>> 0a99037d54247a240ab8cb3b6cbd596577374d0f

function App() {

  return (
<<<<<<< HEAD
    <Routes>
       <Route path="/" element={<Landing />}/>

      <Route path="/home" element={<Homepage />} />

      <Route path="/report" element={<GoalReport />} />

    </Routes>
=======
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Homepage />} />
        <Route path="/group-creation" element={<GroupForm />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/goal-suggestion" element={<GoalSuggestion />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </ThemeProvider>
    
>>>>>>> 0a99037d54247a240ab8cb3b6cbd596577374d0f
 
  )
}

export default App
