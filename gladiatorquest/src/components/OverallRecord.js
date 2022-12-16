const OverallRecord = ({ schoolinfo }) => {
  let thisSchoolData = schoolinfo
  console.log(thisSchoolData)
  const stats = {
    fontSize: '50%'
  }
  return (
    <div style={stats}>
      {/* {/* <p>{thisSchoolData.wins}</p> */}
      {/* <p>{thisSchoolData.losses}</p> */}
      {/* <p>{thisSchoolData.createdAt.split('T')[0]}</p> */}
      <p>wins = 2</p>
      <p>losses = 3</p>
      <p>Established 12-15-2022</p>
    </div>
  )
}
export default OverallRecord
