const { School } = require('../models')

const GetSchools = async (req, res) => {
  try {
    const schools = await School.findAll()
    res.send(schools)
  } catch (error) {
    throw error
  }
}
const CreateSchool = async (req, res) => {
  try {
    const school = await School.create({ ...req.body })
    res.send(school)
  } catch (error) {
    throw error
  }
}
const AvailableSchoolChoices = async (req, res) => {
  try {
    const schools = await School.findAll({
      where: {
        id: {
          [Op.gt]: 2
        }
      }
    })

    res.send(schools)
  } catch (error) {
    throw error
  }
}
const DeleteSchool = async (req, res) => {
  try {
    let schoolid = parseInt(req.params.schoolid)
    await School.destroy({ where: { id: schoolid } })
    res.send({
      msg: `School ${schoolid} Deleted`
    })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetSchools,
  CreateSchool,
  AvailableSchoolChoices,
  DeleteSchool
}
