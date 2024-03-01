import bcrypt from 'bcrypt';
import { addUser, getUser, getUsers } from '../Model/db.js';

const hashUserPassword = (req, res, next) =>  {

    const {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body;

    bcrypt.hash(userPass, 10, async (err, hashpwd) => {

        if(err) throw err

        await addUser(firstName, lastName, userAge, Gender, userRole, emailAdd, hashpwd, userProfile) 
        
        next();
    }); 
}

export default hashUserPassword;