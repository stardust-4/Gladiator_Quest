import Nav from './Nav'
import { Link } from 'react-router-dom'
import FighterDev from './FighterDev'
import UserCard from './UserCard'
const Central = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid'
  }

  return (
    <div style={homeBorder}>
      <Nav />
      <p>This is Central</p>
      <FighterDev />
      <UserCard />
      <Link style={homeBorder} to={'/fighterselect'}>
        advance to arena
      </Link>
    </div>
  )
}
export default Central
