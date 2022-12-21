const OverallRecord = ({ myschool }) => {
  const stats = {
    fontSize: '50%'
  }
  return (
    <div style={stats}>
      <p>wins = {myschool[0].wins}</p>
      <p>losses = {myschool[0].losses}</p>
      <p>Established {myschool[0].createdAt.split('T')[0]}</p>
    </div>
  )
}
export default OverallRecord
