import Nav from './Nav'

const Central = () => {
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid'
  }

  return (
    <div style={homeBorder}>
      <Nav />
      <p>This is Central</p>
    </div>
  )
}
export default Central
