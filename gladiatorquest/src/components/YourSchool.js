import '../CSS/YourSchool.css'

const YourSchool = ({ myschool }) => {
  console.log(myschool)
  return (
    <div className="yourschoolcard">
      <div>{myschool[0].name}</div>
      <img
        className="yourschoolimage"
        src={myschool[0].image}
        alt="schoolimage"
      ></img>
      <div>wealth $ {myschool[0].wealth}</div>
      <div>{myschool[0].description}</div>
    </div>
  )
}
export default YourSchool
