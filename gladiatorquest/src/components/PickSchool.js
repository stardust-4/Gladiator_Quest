import { useNavigate } from 'react-router-dom'
import SchoolCard from './SchoolCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../CSS/SchoolCard.css'

const PickSchool = () => {
  const handleSubmit = () => {
    console.log('submitted')
    navigate('/central')
  }

  let navigate = useNavigate()

  const [schoolsList, setSchoolsList] = useState([])
  const [selection, setSelection] = useState(null)
  //gets school with id greater than 2 ie school available for selection ie excluding the //transfer and opponent schools
  const getSchools = async () => {
    const res = await axios.get(`${BASE_URL}school/pick/`)
    setSchoolsList(res.data)
  }
  const select = (e) => {
    setSelection(e.target.parentElement.className)
  }
  console.log(selection)

  useEffect(() => {
    getSchools()
  }, [])

  const registerBorder = {
    borderWidth: '4px',
    borderStyle: 'solid',
    borderColor: 'green',
    display: 'flex'
  }

  return (
    <div style={registerBorder}>
      <p>Choose a school to take over as manager and start your campaign!</p>
      {schoolsList.map((school) => (
        //

        <div onClick={select} tabIndex="0">
          <SchoolCard
            id={school.id}
            value={school.value}
            school={school}
            key={school.id}
          />
        </div>
        //
      ))}
      <form className="form" onSubmit={handleSubmit}>
        <button>submit</button>
      </form>
    </div>
  )
}
export default PickSchool
