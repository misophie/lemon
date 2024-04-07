import './App.css'
import { Homepage } from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { GroupForm } from './pages/GroupForm'
import { GoalSuggestion } from './pages/GoalSuggestion'
import { ThemeProvider } from '@mui/material/styles';
import { CreateAccountForm } from './pages/CreateAccountForm'
import { ChooseTheme } from './pages/ChooseTheme'
import theme from './theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Homepage />} />
        <Route path="/group-creation" element={<GroupForm />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/goal-suggestion" element={<GoalSuggestion />} />
        <Route path="/choose-theme" element={<ChooseTheme />} />
      </Routes>
    </ThemeProvider>
    
 
  )
}

export default App
