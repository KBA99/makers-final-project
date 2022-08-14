import User from '../models/User.js'
import bcrypt from 'bcrypt'


export async function createNewUser(user) {
    const { firstName, lastName, email, password }  = user;
    const hashedAndSaltedPassword = await bcrypt.hash(password, 10);

    const registerUserObject = await User.create({
        firstName,
        lastName,
        email,
        hashedAndSaltedPassword
    });

    return registerUserObject;
}

export async function findUserByEmail(email) {
	return await User.findOne({ 'email': email });
}

export const throwErrorIfUserIsNull = (user) => {
    if(user === null) throw new Error("This user does not exist.")
}

export const throwErrorIfUserExists = (user) => {
    if(user != null) throw new Error("This email has already been registered.")
}