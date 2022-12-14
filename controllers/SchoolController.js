const { School } = require('../models')
const { Op } = require('sequelize')

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
          [Op.gt]: [2]
        }
      },
      raw: true,
      nest: true
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
const UpdateSchool = async (req, res) => {
  try {
    const schools = await School.update(
      { ...req.body },
      { where: { id: req.params.schoolid }, returning: true }
    )
    res.send(schools)
  } catch (error) {
    throw error
  }
}
const GetUserSchool = async (req, res) => {
  try {
    let userid = parseInt(req.params.userid)
    const schools = await School.findAll({
      where: { userid: userid },
      raw: true,
      nest: true
    })
    res.send(schools)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSchools,
  CreateSchool,
  AvailableSchoolChoices,
  DeleteSchool,
  UpdateSchool,
  GetUserSchool
}
