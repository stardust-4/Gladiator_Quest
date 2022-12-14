const { User } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}
const CreateUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.send(user)
  } catch (error) {
    throw error
  }
}
const DeleteUser = async (req, res) => {
  try {
    let userid = parseInt(req.params.userid)
    await User.destroy({ where: { id: userid } })
    res.send({
      msg: `user ${userid} Deleted`
    })
  } catch (error) {
    throw error
  }
}
const GetUserById = async (req, res) => {
  try {
    let userid = parseInt(req.params.userid)
    const yousir = await User.findAll({ where: { id: userid } })
    res.send(yousir)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetUsers,
  CreateUser,
  DeleteUser,
  GetUserById
}
