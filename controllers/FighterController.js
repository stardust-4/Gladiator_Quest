const { Fighter } = require('../models')

const GetFighters = async (req, res) => {
  try {
    const fighters = await Fighter.findAll()
    res.send(fighters)
  } catch (error) {
    throw error
  }
}

const CreateFighter = async (req, res) => {
  try {
    const fighter = await Fighter.create({ ...req.body })
    res.send(fighter)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFighters,
  CreateFighter
}
