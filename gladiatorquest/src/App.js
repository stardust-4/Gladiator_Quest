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

  const [myschool, setMySchool] = useState([])
  const [myschoolStartDate, setMySchoolStartDate] = useState([])

  const [myfighters, setMyfighters] = useState([])
  const [allfighters, setAllfighters] = useState([])
  const [oppfighters, setOppfighters] = useState([])
  const [transferfighters, setTransferfighters] = useState([])
  const [myuser, setMyuser] = useState([])

  const getMyFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/user/${schoolid}`)
    setMyfighters(res.data)
  }
  const getAllFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/`)
    setAllfighters(res.data)
  }
  const getOppFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/opponents`)
    setOppfighters(res.data)
  }
  const getTransferFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/transfers`)
    setTransferfighters(res.data)
  }
  const getmyschool = async () => {
    const res = await axios.get(`${BASE_URL}school/myschool/${currentuser}`)
    setMySchool(res.data[0])
    setMySchoolStartDate(res.data[0].createdAt.split('T')[0])
  }
  const getuserdata = async () => {
    const res = await axios.get(`${BASE_URL}user/get/${currentuser}`)
    setMyuser(res.data[0])
  }

  useEffect(() => {
    getAllFighters()
    getmyschool()
    getMyFighters()
    getOppFighters()
    getTransferFighters()
    getuserdata()
  }, [])
  // console.log(myschool)
  // console.log(myfighters)
  // console.log(allfighters)
  // console.log(oppfighters)
  // console.log(transferfighters)
  // console.log(myuser)

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
          element={
            <Central
              myuser={myuser}
              myschool={myschool}
              myfighters={myfighters}
              myschoolStartDate={myschoolStartDate}
            />
          }
        />
        <Route
          path="/squad"
          element={<Squad myschool={myschool} myfighters={myfighters} />}
        />
        <Route
          path="/transfers"
          element={
            <Transfers
              myschool={myschool}
              myfighters={myfighters}
              transferfighters={transferfighters}
            />
          }
        />
        <Route
          path="/fighterselect"
          element={
            <FighterSelect
              myschool={myschool}
              myfighters={myfighters}
              oppfighters={oppfighters}
            />
          }
        />
        <Route
          path="/arena"
          element={
            <Arena
              myuser={myuser}
              myschool={myschool}
              myfighters={myfighters}
              oppfighters={oppfighters}
            />
          }
        />
        <Route
          path="/win"
          element={<Win myuser={myuser} myschool={myschool} />}
        />
        <Route
          path="/loss"
          element={<Loss myuser={myuser} myschool={myschool} />}
        />
      </Routes>
    </div>
  )
}

export default App
