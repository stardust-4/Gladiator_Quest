import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import PickSchool from './components/PickSchool'
import Central from './components/Central'

function App() {
  const appBorder = {
    borderWidth: '4px',
    backgroundColor: 'white',
    borderColor: 'blue',
    borderStyle: 'solid'
  }

  return (
    <div className="App" style={appBorder}>
      <header>
        <p>App.js component</p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/pickschool" element={<PickSchool />} />
        <Route path="/central" element={<Central />} />
      </Routes>
    </div>
  )
}

export default App
