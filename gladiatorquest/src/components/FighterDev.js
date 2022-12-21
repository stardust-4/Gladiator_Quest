import MiniMe from './MiniMe'
import '../CSS/Central.css'

const FighterDev = ({ myschool, myfighters }) => {
  const fightercardwrapper = {
    minHeight: '50px',
    minWidth: '50px'
  }
  const small = {
    fontSize: '15px'
  }
  return (
    <div>
      <p>Fighter Dev</p>
      <p style={small}>
        attack starts at 3 points and increases by 1 every 30 rating points
      </p>
      <div style={fightercardwrapper} className="minifightercardwrapper">
        {myfighters.map((fighter) => (
          <MiniMe
            myfighters={myfighters}
            myschool={myschool}
            key={fighter.id}
            fighter={fighter}
          />
        ))}
      </div>
    </div>
  )
}
export default FighterDev
