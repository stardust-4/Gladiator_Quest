import MiniMe from './MiniMe'
const ArenaSquad = () => {
  const squad = {
    width: '200px',
    height: '200px',
    marginLeft: '100px'
    // display: 'inline-block'
  }

  return (
    <div style={squad}>
      <MiniMe />
      <MiniMe />
      <MiniMe />
    </div>
  )
}
export default ArenaSquad
