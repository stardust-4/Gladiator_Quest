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
// import { BASE_URL } from './globals'
// import axios from 'axios'
// import { useState } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
function App() {
  // const [schools, setSchools] = useState([])
  const [fighterList, setFighterList] = useState([])

  const getFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/`)
    setFighterList(res.data)
    console.log(fighterList)
  }
  useEffect(() => {
    getFighters()
  }, [])
  const appBorder = {
    borderWidth: '4px',
    backgroundColor: 'white',
    borderColor: 'blue',
    borderStyle: 'solid'
  }

  // const getSchools = async () => {
  //   const res = await axios.get(`${BASE_URL}/api/school`)
  //   setSchools(res.data)
  // }

  return (
    <div className="App" style={appBorder}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/pickschool" element={<PickSchool />} />
        <Route path="/central" element={<Central />} />
        <Route path="/squad" element={<Squad fighterList={fighterList} />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/fighterselect" element={<FighterSelect />} />
        <Route path="/arena" element={<Arena />} />
      </Routes>
    </div>
  )
}

export default App
