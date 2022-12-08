import { useNavigate } from 'react-router-dom'
import SchoolCard from './SchoolCard'

const PickSchool = () => {
  let navigate = useNavigate()
  const registerBorder = {
    borderWidth: '4px',
    borderStyle: 'solid'
  }

  return (
    <div style={registerBorder}>
      <p>This pick school</p>
      <SchoolCard />
      <button onClick={() => navigate(`/central`)}>submit</button>
    </div>
  )
}
export default PickSchool
