import '../CSS/YourSchool.css'
import { useEffect, useState } from 'react'

const YourSchool = ({ myschool }) => {
  return (
    <div className="yourschoolcard">
      <div>{myschool.name}</div>
      <img
        className="yourschoolimage"
        src={myschool.image}
        alt="schoolimage"
      ></img>
      <div>wealth $ {myschool.wealth}</div>
      <div>{myschool.description}</div>
    </div>
  )
}
export default YourSchool
