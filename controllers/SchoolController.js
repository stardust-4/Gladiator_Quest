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

module.exports = {
  GetSchools,
  CreateSchool
}
