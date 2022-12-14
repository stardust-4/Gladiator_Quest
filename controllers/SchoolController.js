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
const UpdateSchool = async (req, res) => {
  try {
    const school = await School.update(
      { ...req.body },
      { where: { id: req.params.user_Id }, returning: true }
    )
    res.send(school)
  } catch (error) {
    throw error
  }
}
const DeleteSchool = async (req, res) => {
  try {
    let userId = parseInt(req.params.schoolid)
    await User.destroy({ where: { id: userId } })
    res.send({
      msg: `User ${userId} Deleted`
    })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetSchools,
  CreateSchool,
  AvailableSchoolChoices,
  UpdateSchool,
  DeleteSchool
}
