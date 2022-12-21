import { useNavigate } from 'react-router-dom'

const Loss = () => {
  let navigate = useNavigate()

  const proceed = () => {
    navigate('/central')
    // future update  and will lose $200 to pay for medical bills
  }

  return (
    <div>
      <p>You lost and have to pay 200 in medical bills!</p>
      <button onClick={proceed}>continue</button>
    </div>
  )
}
export default Loss
