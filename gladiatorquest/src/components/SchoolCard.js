import '../CSS/SchoolCard.css'

const SchoolCard = (props) => {
  const homeBorder = {
    borderWidth: '4px',
    borderStyle: 'solid'
  }
  const schoolimagewrapper = {
    height: '160px',
    width: '160px'
  }
  return (
    <div style={homeBorder} className={props.school.id} id="card" tabIndex="0">
      <div>{props.school.name}</div>
      <img
        style={schoolimagewrapper}
        src={props.school.image}
        alt="schoolimage"
      ></img>
      <div>Wealth: ${props.school.wealth}</div>
      <div>{props.school.description}</div>
    </div>
  )
}
export default SchoolCard
