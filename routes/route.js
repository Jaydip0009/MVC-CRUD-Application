const { Router } = require('express')
const  {getUser, createUser, UpdateUser, DeleteUser} = require('../controller/user.controller')
const UserRoute = Router()

UserRoute.get('/', getUser)
UserRoute.post('/create', createUser)
UserRoute.patch('/update/:id', UpdateUser)
UserRoute.delete('/delete/:id', DeleteUser)

module.exports = UserRoute