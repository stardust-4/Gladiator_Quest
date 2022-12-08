import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  let navigate = useNavigate()

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
      <button onClick={() => navigate(`/pickschool`)}>submit register</button>
    </div>
  )
}
export default RegisterForm
