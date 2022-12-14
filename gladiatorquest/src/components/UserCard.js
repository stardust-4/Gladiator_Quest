import OverallRecord from './OverallRecord'

const UserCard = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'green',
    borderColor: 'black',
    borderStyle: 'solid',
    width: '250px'
  }

  return (
    <div className="home" style={homeBorder}>
      <p>user card</p>
      <OverallRecord />
    </div>
  )
}
export default UserCard
////is there a need for this?
