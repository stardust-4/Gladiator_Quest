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

  // const [schools, setSchools] = useState([])
  const [fighterList, setFighterList] = useState([])
  const [myschool, setMySchool] = useState(null)
  const [myfighters, setMyfighters] = useState([])

  const getFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/`)
    setFighterList(res.data)
    console.log(fighterList)
  }

  const getMyFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/user/${myschool}`)
    setMyfighters(res.data)
    console.log(myfighters)
  }

  const getmyschool = async () => {
    const res = await axios.get(`${BASE_URL}school/myschool/${currentuser}`, {
      userid: currentuser
    })
    setMySchool(res.data)
  }

  // const getSchools = async () => {
  //     const res = await axios.get(`${BASE_URL}/api/school`)
  //     setSchools(res.data)
  //   }

  useEffect(() => {
    getFighters()
    getmyschool()
    getMyFighters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const appBorder = {
    borderWidth: '4px',
    backgroundColor: 'white',
    borderColor: 'blue',
    borderStyle: 'solid'
  }
  console.log(myschool)
  // console.log(myfighters)
  // console.log(myfighters)

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
              myschool={myschool}
              currentuser={currentuser}
              schoolid={schoolid}
            />
          }
        />
        <Route
          path="/squad"
          element={
            <Squad
              fighterList={fighterList}
              currentuser={currentuser}
              schoolid={schoolid}
            />
          }
        />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/fighterselect" element={<FighterSelect />} />
        <Route
          path="/arena"
          element={<Arena currentuser={currentuser} schoolid={schoolid} />}
        />
        <Route path="/win" element={<Win />} />
        <Route path="/loss" element={<Loss />} />
      </Routes>
    </div>
  )
}

export default App
