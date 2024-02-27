import { getUsers, getUser, addUser, deleteUser, editUser } from '../Model/db.js'


export default {

    allUsers : async (req, res) => {

        try {
            res.send(await getUsers(req.params.firstName))
        } catch (error) {

            res.json({
                status : statusCode,
                msg: `failed to fetch ${req.url}`
            })
            
        }
        
    },

    singleUser : async (req, res) => {

        try {
            res.send(await getUser(+req.params.id))
        } catch (err) {

            res.json({
                status : statusCode,
                msg: `failed to fetch ${req.url}`
            })

        }

    },

    addUserToDB : async (req, res) => {
        try {
            
            const {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body;

            await addUser(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile);
            
            res.send(await getUsers())

        } catch (error) {
            
            res.json({
                status : statusCode,
                msg: `failed to fetch ${req.url}`
            })

        }
    },

    deletUuserByID : async (req, res) => {
        try {
            await deleteUser(+req.params.id)

            res.send(await getUsers())
        } catch (error) {
            
            res.json({
                status : statusCode,
                msg: `failed to fetch ${req.url}`
            })

        }
    },
    
    editUserByID : async (req, res) => {
            
        try {
            
            let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body;
        
            const [user] = await getUser(+req.params.id)
        
            firstName ? firstName : {firstName} = user
    
            lastName ? lastName : {lastName} = user
    
            userAge ? userAge : {userAge} = user
    
            Gender ? Gender : {Gender} = user
            
            userRole ? userRole : {userRole} = user
    
            emailAdd ? emailAdd : {emailAdd} = user
    
            userPass ? userPass : {userPass} = user
    
            userProfile ? userProfile : {userProfile} = user
    
            await editUser(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, +req.params.id)
    
            res.send(await getUsers())

        } catch (error) {

            res.json({
                status : statusCode,
                msg: `failed to fetch ${req.url}`
            })
            
        }


    }
}