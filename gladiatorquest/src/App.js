import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import PickSchool from './components/PickSchool'
import Central from './components/Central'
import Squad from './components/Squad'
import Transfers from './components/Transfers'
import FighterSelect from './components/FighterSelect'
import Arena from './components/Arena'
import { BASE_URL } from './globals'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [schools, setSchools] = useState([])

  const appBorder = {
    borderWidth: '4px',
    backgroundColor: 'white',
    borderColor: 'blue',
    borderStyle: 'solid'
  }

  const getSchools = async () => {
    const res = await axios.get(`${BASE_URL}/api/school`)
    setSchools(res.data)
  }

  return (
    <div className="App" style={appBorder}>
      <header>
        <p>App.js component</p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/pickschool"
          element={<PickSchool getSchools={getSchools} />}
        />
        <Route path="/central" element={<Central />} />
        <Route path="/squad" element={<Squad />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/fighterselect" element={<FighterSelect />} />
        <Route path="/arena" element={<Arena />} />
      </Routes>
    </div>
  )
}

export default App
