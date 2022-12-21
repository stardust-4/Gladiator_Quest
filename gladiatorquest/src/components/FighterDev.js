import MiniMe from './MiniMe'
import { useEffect, useState } from 'react'
import '../CSS/Central.css'

const FighterDev = ({ myschool, myfighters }) => {
  const fightercardwrapper = {
    height: '50px',
    width: '50px'
  }

  return (
    <div>
      <p>Fighter Dev</p>
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
