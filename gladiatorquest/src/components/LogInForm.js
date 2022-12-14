import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../CSS/LoginForm.css'

const LoginForm = () => {
  const initialState = { name: '', id: '' }
  const [formValues, setFormValues] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let userYouSignedInAs = await axios.get(
      `${BASE_URL}user/get/${formValues.id}`
    )
    localStorage.setItem('user', JSON.stringify(userYouSignedInAs.data))
    navigate('/central')
  }

  const registerBorder = {
    borderWidth: '4px',
    borderStyle: 'solid'
  }

  return (
    <div className="register" style={registerBorder}>
      <p>This is the log in from</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={handleChange}
          value={formValues.name}
          name="name"
          className="input"
        />
        <input
          placeholder="Id Number"
          onChange={handleChange}
          value={formValues.id}
          name="id"
          className="input"
        />
        <button
          disabled={!formValues.name || !formValues.id}
          className="button"
        >
          Login
        </button>
      </form>
      <p>If you do not have an account then register by clicking below</p>
      <button className="registerbtn" onClick={() => navigate(`/register`)}>
        Register
      </button>
    </div>
  )
}
export default LoginForm
