const OverallRecord = ({ schoolinfo }) => {
  let thisSchoolData = schoolinfo.data[0]
  console.log(thisSchoolData)
  const stats = {
    fontSize: '50%'
  }
  return (
    <div style={stats}>
      <p>stats/OverallRecord</p>
    </div>
  )
}
export default OverallRecord
