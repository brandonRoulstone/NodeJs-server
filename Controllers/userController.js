import { getUsers, getUser, addUser, deleteUser, checkUser, editUser } from '../Model/db.js'


export default {

    allUsers : async (req, res) => {

        try {
            res.send(await getUsers(req.params.firstName))
        } catch (error) {

            console.error("Internal error")
            res.status(404).json({
                msg: "internal error while fetching users route"
            })
            
        }
        
    },

    singleUser : async (req, res) => {

        try {
            res.send(await getUser(+req.params.id))
        } catch (err) {

            console.error("Internal error")
            res.status(404).json({
                msg: "internal error occurred while fetching a single product"
            })

        }

    },

    addUserToDB : async (req, res) => {
        try {
            
            // const {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body;
            
            // 
            res.send(await getUsers())

        } catch (error) {
            
            console.error("Internal error")
            res.status(404).json({
                msg: "internal error while adding"
            })

        }
    },

    deletUuserByID : async (req, res) => {
        try {
            await deleteUser(+req.params.id)

            res.send(await getUsers())
        } catch (error) {
            
            console.error("Internal error")
            res.status(404).json({
                msg: "internal error occurred while trying to delete"
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

            console.error("Internal error")
            res.status(404).json({
                msg: "internal error occurred while trying to edit a product"
            })
            
        }


    }
}