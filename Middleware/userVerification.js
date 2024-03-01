import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { checkUser } from '../Model/db.js';


const authenticate = async (req, res, next) => {
    const {emailAdd, userPass} = req.body;

    const hashpwd = await checkUser(emailAdd);

    let bool = await bcrypt.compare(userPass, hashpwd)
    // (err, result) => {

        // if (err) throw err

        if(bool === true) {

            const {emailAdd} = req.body;
            
            const token = jwt.sign({emailAdd: emailAdd}, process.env.SECRET_KEY, {expiresIn: '1h'})

            res.cookie('jwt', token, {httpOnly:true})
            console.log(token
                )
            // res.send({
            //     token: token,
            //     msg: 'You have logged in '
            // })

            next();

        } else{
            res.send("the password is not valid")
            console.log(bool)
        }
    // })
}

export default authenticate;   