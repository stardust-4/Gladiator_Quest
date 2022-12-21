import MiniMe from './MiniMe'
import { useEffect, useState } from 'react'
import '../CSS/Central.css'

const FighterDev = () => {
  const fightercardwrapper = {
    height: '50px',
    width: '50px'
  }

  return (
    <div>
      <p>Fighter Dev</p>
      <div style={fightercardwrapper} className="minifightercardwrapper">
        <MiniMe />
      </div>
    </div>
  )
}
export default FighterDev
