import User from '../models/User.js'
import bcrypt from 'bcrypt';
import userSchema from '../models/User.js'
import crypto from 'node:crypto';
import { findUserByEmail, throwErrorIfUserIsNull, createNewUser, throwErrorIfUserExists } from '../services/user-service.js';


export const register = async (req, res) => {
    try {
        const { email }  = req.body;
        const user = await findUserByEmail(email)
        throwErrorIfUserExists(user)

        const registeredUserObject = await createNewUser(req.body)
        res.status(201).send("New user created.")

        const hashedAndSaltedPassword = await bcrypt.hash(password, salt)

    } catch (error) {
        console.log(error.message);
        res.status(404).send({error: error.message}); // not found
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