import '../CSS/SchoolCard.css'

const SchoolCard = (props) => {
  return (
    <div className={props.school.id} id="card" tabIndex="0">
      <div className="schoolname">{props.school.name}</div>
      <img
        className="schoolimagewrapper"
        src={props.school.image}
        alt="schoolimage"
      ></img>
      <div className="qwe">Wealth: ${props.school.wealth}</div>
      <div className="qwe">{props.school.description}</div>
    </div>
  )
}
export default SchoolCard
