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
import Win from './components/Win'
import Loss from './components/Loss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
function App() {
  let currentuser = localStorage.getItem('userid')
  let schoolid = localStorage.getItem('userschool')

  const [myschool, setMySchool] = useState(null)
  const [myfighters, setMyfighters] = useState([])
  const [allfighters, setAllfighters] = useState([])
  const [myuser, setMyuser] = useState(null)

  const getMyFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/user/${schoolid}`)
    setMyfighters(res.data)
  }
  const getAllFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/`)
    setAllfighters(res.data)
  }
  const getmyschool = async () => {
    const res = await axios.get(`${BASE_URL}school/myschool/${currentuser}`)
    setMySchool(res.data)
  }
  const getuserdata = async () => {
    const res = await axios.get(`${BASE_URL}user/get/${currentuser}`)
    setMyuser(res.data)
  }

  useEffect(() => {
    getAllFighters()
    getmyschool()
    getMyFighters()
    getuserdata()
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(myschool)
  console.log(myfighters)
  console.log(allfighters)
  console.log(myuser)

  const appBorder = {
    borderWidth: '4px',
    backgroundColor: 'white',
    borderColor: 'blue',
    borderStyle: 'solid'
  }

  return (
    <div className="App" style={appBorder}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/pickschool" element={<PickSchool />} />
        <Route
          path="/central"
          element={<Central myschool={myschool} myfighters={myfighters} />}
        />
        <Route path="/squad" element={<Squad />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/fighterselect" element={<FighterSelect />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/win" element={<Win />} />
        <Route path="/loss" element={<Loss />} />
      </Routes>
    </div>
  )
}

export default App
