import { useNavigate } from 'react-router-dom'
import SchoolCard from './SchoolCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PickSchool = () => {
  let navigate = useNavigate()

  const [schoolsList, setSchoolsList] = useState([])

  const getSchools = async () => {
    const res = await axios.get(`${BASE_URL}school/`)
    setSchoolsList(res.data)
    console.log(res.data)
  }
  useEffect(() => {
    getSchools()
  }, [])
  console.log(schoolsList)

  const registerBorder = {
    borderWidth: '4px',
    borderStyle: 'solid'
  }
  const schoolCard = {
    width: '50%',
    margin: 'auto'
  }

  return (
    <div style={registerBorder}>
      <p>This is pick school component</p>
      {schoolsList.map((school) => (
        <div style={schoolCard}>
          <SchoolCard school={school} key={school.id} />
        </div>
      ))}
      <button onClick={() => navigate(`/central`)}>submit</button>
    </div>
  )
}
export default PickSchool
