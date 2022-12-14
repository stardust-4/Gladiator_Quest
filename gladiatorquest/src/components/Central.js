import Nav from './Nav'
import { Link } from 'react-router-dom'
import FighterDev from './FighterDev'
import UserCard from './UserCard'
import OverallRecord from './OverallRecord'

const Central = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: '#f6aa1c',
    borderColor: 'black',
    borderStyle: 'solid'
  }
  const advancebtn = {
    borderWidth: '4px',
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    width: '75px',
    height: '75px'
  }

  return (
    <div style={homeBorder}>
      <Nav />
      <p>This is Central</p>
      <FighterDev />
      <OverallRecord />
      <div style={advancebtn}>
        <Link to={'/fighterselect'}>advance to arena</Link>
      </div>
    </div>
  )
}
export default Central
