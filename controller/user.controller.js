const User = require('../models/user.schema');

const getUser = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const createUser = async(req, res) => {
    let data = await User.create(req.body)
    res.send(data)
}

const UpdateUser = async(req, res) => {
    let {id} = req.params
    let data = await User.findByIdAndUpdate(id, req.body)
    res.send(data)
}

const DeleteUser = async(req, res) => {
    let {id} = req.params
    let data = await User.findByIdAndDelete(id, req.body)
    res.send(data)
}

module.exports = {getUser, createUser, UpdateUser, DeleteUser}