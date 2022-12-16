import { useNavigate } from 'react-router-dom'
import SchoolCard from './SchoolCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PickSchool = () => {
  let currentuser = localStorage.getItem('userid')
  console.log('current user id = ' + currentuser)

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
  console.log('selected school id = ' + selection)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}school/${selection}`, {
      userid: currentuser
    })
    localStorage.setItem('userschool', selection)

    navigate('/central')
  }

  useEffect(() => {
    getSchools()
  }, [])

  const registerBorder = {
    borderWidth: '4px',
    borderStyle: 'solid',
    borderColor: 'green',
    display: 'flex',
    height: '500px'
  }
  const blurb = {
    fontSize: '20px'
  }
  return (
    <div style={registerBorder}>
      <p style={blurb}>
        Choose a school to take over as manager and start your campaign!
      </p>
      {schoolsList.map((school) => (
        //

        <div onClick={select}>
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
