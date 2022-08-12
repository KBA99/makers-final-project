import User from '../models/User.js'
import bcrypt from 'bcrypt';
import userSchema from '../models/User.js'
import crypto from 'node:crypto';


export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password,
        } = req.body;

        //TODO logic to check if if user already exits in the service

        const hashedAndSaltedPassword = await bcrypt.hash(password, salt)

        const registerUserObject = await User.create({
            firstName,
			lastName,
            email,
			hashedAndSaltedPassword
        })
		// some logic to validate whether a user already exists here and send some data here
        res.status(201).send("User Saved")
        console.log(registerUserObject)
    } catch (error) {
        console.log(error.message);
        res.status(401).send(error.message);
    }
}

export const login = async (req, res) => {
    //TODO logic to find the user name, throw error if no username

    // const user = User.find(user => user.email === req.body.email)
    // if (user == null) {
    //     return res.status(400).send('Cannot find user')
    // }


    try {
        if(await bcrypt.compare(req.body.password, user.password)){
        res.status(201).send("User succesfully athenticated")
        // JWT authentication here
        }

    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
    
};

export const resetPassword = async (req, res) => {

}