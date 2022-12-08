import Squad from './Squad'
import { Link } from 'react-router-dom'
const FighterSelect = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'purple',
    borderColor: 'black',
    borderStyle: 'solid'
  }

  return (
    <div style={homeBorder}>
      <p>Fighter select</p>
      <Squad />
      <Link style={homeBorder} to={'/arena'}>
        ready
      </Link>
    </div>
  )
}
export default FighterSelect
