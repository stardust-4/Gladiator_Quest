const OverallRecord = ({ myschool, myschoolStartDate }) => {
  const stats = {
    fontSize: '50%'
  }
  return (
    <div style={stats}>
      <p>wins = {myschool.wins}</p>
      <p>losses = {myschool.losses}</p>
      <p>Established {myschoolStartDate}</p>
    </div>
  )
}
export default OverallRecord
