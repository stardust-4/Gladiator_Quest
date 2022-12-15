import '../CSS/YourSchool.css'

const YourSchool = ({ schoolinfo }) => {
  let thisSchool = schoolinfo.data[0]
  console.log(schoolinfo.data[0])
  return (
    <div className="yourschoolcard">
      <div>{thisSchool.name}</div>
      <img
        className="yourschoolimage"
        src={thisSchool.image}
        alt="schoolimage"
      ></img>
      <div>wealth $ {thisSchool.wealth}</div>
      <div>{thisSchool.description}</div>
    </div>
  )
}
export default YourSchool
