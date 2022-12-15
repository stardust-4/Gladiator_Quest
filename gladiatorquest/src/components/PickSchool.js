import { useNavigate } from 'react-router-dom'
import SchoolCard from './SchoolCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PickSchool = () => {
  const initialState = { schoolChoice: '' }
  const [formValues, setFormValues] = useState(initialState)

  // const handleChange = (e) => {
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value })
  // }

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
  const schoolCard = {
    // backgroundColor: 'pink'
  }

  return (
    <div style={registerBorder}>
      <p>Choose a school to take over as manager and start your campaign!</p>
      {schoolsList.map((school) => (
        <div style={schoolCard} onClick={select}>
          <SchoolCard
            id={school.id}
            value={school.value}
            school={school}
            key={school.id}
          />
        </div>
      ))}
      <form className="form" onSubmit={handleSubmit}>
        {/* <input
          placeholder="Enter Your School Choice Here"
          onChange={handleChange}
          value={formValues.email}
          name="email"
          className="input"
        /> */}
        <button>submit</button>
      </form>
    </div>
  )
}
export default PickSchool
