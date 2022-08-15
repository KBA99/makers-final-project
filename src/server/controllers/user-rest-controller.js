import { findUserByEmail, throwErrorIfUserIsNull, createNewUser, throwErrorIfUserExists, authenticateUserByEmailAndPassword } from '../services/user-service.js';
import { generateAccessToken } from '../middleware/authentication.js';


export const register = async (req, res) => {
    try {
        const { email }  = req.body;
        const user = await findUserByEmail(email)
        throwErrorIfUserExists(user)

        const registeredUserObject = await createNewUser(req.body)
    
        const jwtToken = generateAccessToken(registeredUserObject)
        res.status(201).set('Authorization', `bearer ${jwtToken}`).send({data: "New user created."});

        console.log(registeredUserObject)

    } catch (error) {
        console.log(error.message);
        res.status(404).send({error: error.message}); // not found
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email)
        throwErrorIfUserIsNull(user)

        authenticateUserByEmailAndPassword(password, user.password)

        const jwtToken = generateAccessToken(user)
        res.status(200).set('Authorization', `bearer ${jwtToken}`).send({data: "User Authenticated."});
    } catch (error) {
        console.log(error.message);
        res.status(403).send({error: error.message}); // forbidden
    }
    
};

export const resetPassword = async (req, res) => {

}