import { useNavigate } from 'react-router-dom'

const Win = () => {
  let navigate = useNavigate()

  const proceed = () => {
    navigate('/central')
    // future update  and will win $200
  }

  return (
    <div>
      <p>You Won! Enjoy 200 in prizemoney</p>
      <button onClick={proceed}>continue</button>
    </div>
  )
}
export default Win
