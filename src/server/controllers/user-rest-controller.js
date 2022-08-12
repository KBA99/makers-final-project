import bcrypt from 'bcrypt';
import userSchema from '../models/User.js'
import crypto from 'node:crypto';

export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password,
        } = req.body;

        const registerUserObject = await User.create({
            firstName,
			lastName,
            email,
			password
        })
		// some logic to validate whether a user already exists here and send some data here
        res.status(201).send("User Saved")
        console.log(registerUserObject)
    } catch (error) {
        console.log(error.message);
        res.status(401).send(error.message);
    }
}
