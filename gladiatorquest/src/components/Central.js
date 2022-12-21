import Nav from './Nav'
import { Link } from 'react-router-dom'
import FighterDev from './FighterDev'
import OverallRecord from './OverallRecord'
import '../CSS/Central.css'
import YourSchool from './YourSchool'
import Cheat from './Cheat'
/// OGGGG
const Central = (props) => {
  // console.log(props.myschool)
  // console.log(props.myfighters)

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
          <YourSchool myschool={props.myschool} />
        </div>
        <div className="element4 grid-box">
          {/* <FighterDev schoolinfo={schoolinfo} /> */}
        </div>
        <div className="element6 grid-box">
          School Stats
          <OverallRecord
            myschool={props.myschool}
            myschoolStartDate={props.myschoolStartDate}
          />
        </div>
      </main>
    </>
  )
}
export default Central
