import { getUsers, getUser, addUser, deleteUser, editUser } from '../Model/db.js'


export default {

    allUsers : async (req, res) => {

        res.send(await getUsers())
        
    },

    singleUser : async (req, res) => {

        res.send(await getUser(+req.params.id))

    },

    addUserToDB : async (req, res) => {

        const {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body;

        await addUser(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile);
        
        res.send(await getUsers())
    },

    deletUuserByID : async (req, res) => {

        await deleteUser(+req.params.id)

        res.send(await getUsers())
    },
    
    editUserByID : async (req, res) => {

        const [user] = await getUser(+req.body.id)

        let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body;

        firstName ? firstName : {firstName} = user

        lastName ? lastName : {lastName} = user

        userAge ? userAge : {userAge} = user

        Gender ? Gender : {Gender} = user
        
        userRole ? userRole : {userRole} = user

        emailAdd ? emailAdd : {emailAdd} = user

        userPass ? userPass : {userPass} = user

        userProfile ? userProfile : {userProfile} = user

        await editUser(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, +req.params.id)

    }
}