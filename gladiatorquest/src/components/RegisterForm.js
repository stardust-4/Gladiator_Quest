import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const RegisterForm = () => {
  let initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [newUser, setNewUser] = useState(initialState)
  let navigate = useNavigate()
  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value })
  }

  const createUser = async (e) => {
    e.preventDefault()
    let userYouJustCreated = await axios.post(`${BASE_URL}user/create`, newUser)
    console.log(userYouJustCreated.data)
    console.log(userYouJustCreated.data.id)
    localStorage.setItem('user', JSON.stringify(userYouJustCreated.data))
    navigate('/pickschool')
  }

  const registerBorder = {
    borderWidth: '4px',
    backgroundColor: 'blue',
    borderColor: 'gold',
    borderStyle: 'solid',
    color: 'white'
  }

  return (
    <div className="register" style={registerBorder}>
      <p>This is the register from</p>
      <form className="form" onSubmit={createUser}>
        <input
          placeholder="Name"
          onChange={handleChange}
          value={newUser.name}
          name="name"
          className="input"
        />
        <input
          placeholder="Email"
          onChange={handleChange}
          value={newUser.email}
          name="email"
          className="input"
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          value={newUser.password}
          name="password"
          className="input"
        />
        <input
          placeholder="Confirm Password"
          onChange={handleChange}
          value={newUser.confirmPassword}
          name="confirmPassword"
          className="input"
        />
        <button
          onClick={createUser}
          disabled={
            (!newUser.email,
            !newUser.name,
            !newUser.password,
            !newUser.confirmPassword) ||
            newUser.confirmPassword !== newUser.password
          }
        >
          Create Account
        </button>
      </form>
    </div>
  )
}
export default RegisterForm
