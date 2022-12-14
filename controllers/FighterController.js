const { Fighter } = require('../models')

const GetFighters = async (req, res) => {
  try {
    const fighters = await Fighter.findAll()
    res.send(fighters)
  } catch (error) {
    throw error
  }
}

const GetTransferFighters = async (req, res) => {
  try {
    const transferFighters = await Fighter.findAll({
      where: {
        schoolid: 1
      },
      raw: true,
      nest: true
    })

    res.send(transferFighters)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'get error' })
  }
}
const GetOpponentFighters = async (req, res) => {
  try {
    const OpponentFighters = await Fighter.findAll({
      where: {
        schoolid: 2
      },
      raw: true,
      nest: true
    })

    res.send(OpponentFighters)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'get error' })
  }
}

//gets fighters by parameter school id
const GetUserFighters = async (req, res) => {
  try {
    const UserFighters = await Fighter.findAll({
      where: {
        schoolid: `${req.params.userSchoolid}`
      },
      raw: true,
      nest: true
    })

    res.send(UserFighters)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'get error' })
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

const UpdateFighter = async (req, res) => {
  try {
    const fighters = await Fighter.update(
      { ...req.body },
      { where: { id: req.params.fighterid }, returning: true }
    )
    res.send(fighters)
  } catch (error) {
    throw error
  }
}

const GetFighterById = async (req, res) => {
  try {
    const champion = await Fighter.findAll({
      where: {
        id: `${req.params.id}`
      },
      raw: true,
      nest: true
    })

    res.send(champion)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'get error' })
  }
}
module.exports = {
  GetFighters,
  CreateFighter,
  GetTransferFighters,
  GetOpponentFighters,
  GetUserFighters,
  UpdateFighter,
  GetFighterById
}
