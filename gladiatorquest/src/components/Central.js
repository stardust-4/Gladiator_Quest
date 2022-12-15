import Nav from './Nav'
import { Link } from 'react-router-dom'
import FighterDev from './FighterDev'
import OverallRecord from './OverallRecord'
import '../CSS/Central.css'
import YourSchool from './YourSchool'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Cheat from './Cheat'

const Central = () => {
  let currentuser = localStorage.getItem('userid')
  const [schoolinfo, setSchoolinfo] = useState(null)

  const getUserSchool = async () => {
    setSchoolinfo(
      await axios.get(`${BASE_URL}school/myschool/${currentuser}`, {
        userid: currentuser
      })
    )
  }

  useEffect(() => {
    getUserSchool()
    // eslint-disable-next-line
  }, [])

  console.log(schoolinfo)
  return (
    <>
      <Nav />
      <main className="wrapper">
        <div className="element1 grid-box">
          <Link to={'/fighterselect'}>advance to arena</Link>
        </div>
        <div className="element2 grid-box">
          {' '}
          <Cheat />
        </div>
        <div className="element3 grid-box">
          <YourSchool schoolinfo={schoolinfo} />
        </div>
        <div className="element4 grid-box">
          <FighterDev schoolinfo={schoolinfo} />
        </div>
        <div className="element5 grid-box">user info</div>
        <div className="element6 grid-box">
          school stats
          <OverallRecord schoolinfo={schoolinfo} />
        </div>
      </main>
    </>
  )
}
export default Central
