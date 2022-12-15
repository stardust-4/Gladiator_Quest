import MiniMe from './MiniMe'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../CSS/Central.css'

const FighterDev = ({ schoolinfo }) => {
  let thisSchoolId = schoolinfo.data[0].id

  console.log(thisSchoolId)
  const [fighterList, setFighterList] = useState([])

  const getFighters = async () => {
    const res = await axios.get(`${BASE_URL}fighter/user/${thisSchoolId}`)
    setFighterList(res.data)
    console.log(res.data)
  }
  useEffect(() => {
    getFighters()
  }, [])
  console.log(fighterList)

  const fightercardwrapper = {
    height: '50px',
    width: '50px'
  }

  return (
    <div>
      <p>Fighter Dev</p>
      {fighterList.map((fighter) => (
        <div style={fightercardwrapper} className="fightercardwrapper">
          <MiniMe fighter={fighter} key={fighter.id} />
        </div>
      ))}
    </div>
  )
}
export default FighterDev
