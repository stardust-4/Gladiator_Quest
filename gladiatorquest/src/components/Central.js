import Nav from './Nav'
import { Link } from 'react-router-dom'
import FighterDev from './FighterDev'
import OverallRecord from './OverallRecord'
import '../CSS/Central.css'
import YourSchool from './YourSchool'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Central = () => {
  let currentuser = localStorage.getItem('userid')
  const [schoolinfo, setSchoolinfo] = useState(null)

  const getUserSchool = async () => {
    let myschool = await axios.get(
      `${BASE_URL}school/myschool/${currentuser}`,
      {
        userid: currentuser
      }
    )
    setSchoolinfo(myschool.data)
  }

  useEffect(() => {
    getUserSchool()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(schoolinfo)
  return (
    <>
      <Nav />
      <main class="wrapper">
        <div class="element1 grid-box">
          <Link to={'/fighterselect'}>advance to arena</Link>
        </div>
        <div class="element2 grid-box"> rock paper scisors cheetsheet</div>
        <div class="element3 grid-box">
          {/* <YourSchool schoolinfo={schoolinfo} /> */}
        </div>
        <div class="element4 grid-box">
          <FighterDev />
        </div>
        <div class="element5 grid-box">user info</div>
        <div class="element6 grid-box">
          school stats
          <OverallRecord schoolinfo={schoolinfo} />
        </div>
      </main>
    </>
  )
}
export default Central
