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

const Central = (props) => {
  // let currentuser = localStorage.getItem('userid')
  // let schoolid = localStorage.getItem('userschool')
  // const [schoolinfo, setSchoolinfo] = useState(null)

  // const getUserSchool = async () => {
  //   setSchoolinfo(
  //     await axios.get(`${BASE_URL}school/myschool/${currentuser}`, {
  //       userid: currentuser
  //     })
  //   )
  // }

  // useEffect(() => {
  //   getUserSchool()
  //   // eslint-disable-next-line
  // }, [])

  // console.log(currentuser)
  // console.log(schoolinfo.data)
  // console.log(props.currentuser)
  console.log(props.myschool)

  return (
    <>
      <Nav />
      <main className="wrapper">
        <div className="element1 grid-box">
          <Link to={'/arena'}>Advance to Arena!</Link>
        </div>
        <div className="element2 grid-box">
          {' '}
          <Cheat />
        </div>
        <div className="element3 grid-box">
          <YourSchool schoolinfo={props.myschool} />
        </div>
        <div className="element4 grid-box">
          {/* <FighterDev schoolinfo={schoolinfo} /> */}
          <FighterDev />
        </div>
        <div className="element6 grid-box">
          School Stats
          <OverallRecord schoolinfo={props.myschool} />
        </div>
      </main>
    </>
  )
}
export default Central
