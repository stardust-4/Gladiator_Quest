import Squad from './Squad'
import { Link } from 'react-router-dom'
const FighterSelect = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'purple',
    borderColor: 'black',
    borderStyle: 'solid'
  }
  // const squad = {
  //   maxWidth: '50%'
  //   float: 'right'
  // }

  return (
    <div style={homeBorder}>
      <p>Fighter select</p>
      <div>
        <Link style={homeBorder} to={'/arena'}>
          ready
        </Link>
      </div>
    </div>
  )
}
export default FighterSelect
