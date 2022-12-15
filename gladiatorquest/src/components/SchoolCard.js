import '../CSS/SchoolCard.css'

const SchoolCard = (props) => {
  const homeBorder = {
    borderWidth: '4px',
    // backgroundColor: 'red',
    // borderColor: 'black',
    borderStyle: 'solid'
  }
  const schoolimagewrapper = {
    height: '160px',
    width: '160px'
  }
  return (
    <div style={homeBorder} className={props.school.id} id="card">
      <div>{props.school.name}</div>
      <img style={schoolimagewrapper} src={props.school.image}></img>
      <div>Wealth: ${props.school.wealth}</div>
      <div>{props.school.description}</div>
    </div>
  )
}
export default SchoolCard
