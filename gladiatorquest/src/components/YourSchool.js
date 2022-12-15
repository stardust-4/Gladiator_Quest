import '../CSS/YourSchool.css'

const YourSchool = ({ schoolinfo }) => {
  let thisSchool = schoolinfo[0]
  return (
    <div className="yourschoolcard">
      <div className="yourschoolimage">{thisSchool.name}</div>
      <img src={thisSchool.image} alt="schoolimage"></img>
      <div>wealth $ {thisSchool.wealth}</div>
      <div>{thisSchool.description}</div>
    </div>
  )
}
export default YourSchool
