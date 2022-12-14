const OverallRecord = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'pink',
    borderColor: 'black',
    borderStyle: 'solid',
    width: '300px',
    height: '300px'
  }

  return (
    <div className="home" style={homeBorder}>
      <p>stats/OverallRecord</p>
    </div>
  )
}
export default OverallRecord
