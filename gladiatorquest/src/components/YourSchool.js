import '../CSS/YourSchool.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const YourSchool = ({ schoolinfo }) => {
  // let thisSchool = schoolinfo
  // console.log(schoolinfo)

  // let usr = localStorage.getItem('usersid')
  // const fuck = async () => {
  //   let res = await axios.get(
  //     `http://localhost:3001/api/school/myschool/${usr}`
  //   )
  //   console.log(res.data)
  // }
  // useEffect(() => {
  //   fuck()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return (
    // <div className="yourschoolcard">
    //   <div>{thisSchool}</div>
    //   <img
    //     className="yourschoolimage"
    //     src={thisSchool.image}
    //     alt="schoolimage"
    //   ></img>
    //   <div>wealth $ {thisSchool.wealth}</div>
    //   <div>{thisSchool.description}</div>
    // </div>

    <div className="yourschoolcard">
      <div>Ludus Magnus</div>
      <img
        className="yourschoolimage"
        src="https://i.natgeofe.com/n/c4c36951-1b78-4d21-8eee-86f3a6da30b4/76935.jpg"
        alt="schoolimage"
      ></img>
      <div>wealth $ 150,000</div>
      <div>
        The Great Gladiatorial Training School was the largest of the
        gladiatorial schools in Rome. It was built by the emperor Domitian
      </div>
    </div>
  )
}
export default YourSchool
