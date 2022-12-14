import MiniMe from './MiniMe'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const FighterDev = () => {
  const [fighterList, setFighterList] = useState([])

  const getFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/`)
    setFighterList(res.data)
    console.log(res.data)
  }
  useEffect(() => {
    getFighters()
  }, [])
  console.log(fighterList)

  const homeBorder = {
    borderWidth: '4px',
    backgroundColor: 'grey',
    borderColor: 'gold',
    borderStyle: 'solid',
    width: '500px',
    height: '300px'
  }
  const fightercardwrapper = {
    position: 'absolute',
    height: '50px',
    width: '50px'
  }

  return (
    <div className="home" style={homeBorder}>
      <p>Fighter Dev</p>
      {fighterList.map((fighter) => (
        <div style={fightercardwrapper}>
          <MiniMe fighter={fighter} key={fighter.id} />
        </div>
      ))}
    </div>
  )
}
export default FighterDev
