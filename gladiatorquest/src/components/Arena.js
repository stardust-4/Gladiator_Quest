import backgrounds from '../assets/backgrounds'
import ArenaFighterCard from './ArenaFighterCard'
import ArenaSquad from './ArenaSquad'
import OpponentCard from './OpponentCard'
import '../CSS/Central.css'
const Arena = () => {
  console.log(backgrounds[0].url)
  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'pink',
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundImage: `url(${backgrounds[0].url})`,
    height: '750px'
  }

  const yourFighter = {
    display: 'inline-block',
    width: '235px',
    height: '305px',
    float: 'left',
    marginTop: '270px',
    marginLeft: '260px'
  }
  const opponent = {
    display: 'inline-block',
    width: '235px',
    marginRight: '260px',
    float: 'right',
    marginTop: '270px'
  }
  const squad = {
    display: 'flex',
    float: 'left',
    marginTop: '20px'
  }
  const fight = {
    backgroundColor: 'pink',
    width: '85px',
    height: '85px',
    margin: 'auto',
    borderRadius: '45%',
    padding: '20px',
    fontSize: '20px'
  }

  return (
    <div className="home" style={homeBorder}>
      <p>Arena, fight!</p>
      <div style={yourFighter}>
        <ArenaFighterCard />
      </div>
      <div className="opfightercardwrapper" style={opponent}>
        {<OpponentCard />}
      </div>
      <div style={squad}>{/* <ArenaSquad /> */}</div>
      <div
        style={fight}
        onClick={() => {
          console.log(OpponentCard)
        }}
      >
        Click!
      </div>
    </div>
  )
}
export default Arena
