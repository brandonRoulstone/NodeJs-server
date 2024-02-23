import express from 'express';
import controller from '../Controllers/userController.js';
import hashUserPassword from '../Middleware/hashUserPwd.js';


const routes = express.Router();

routes.route('/')
    .get(controller.allUsers)
    // middleware for userpassword to be hashed
    .post(hashUserPassword,controller.addUserToDB)


routes.route('/:id')
    .get(controller.singleUser)
    .delete(controller.deletUuserByID)
    .patch(controller.editUserByID)

export default routes;