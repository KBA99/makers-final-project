import { findUserByEmail, throwErrorIfUserIsNull, createNewUser, throwErrorIfUserExists, authenticateUserByEmailAndPassword, throwErrorIfPasswordIsIncorrect} from '../services/user-service.js';
import { generateAccessToken } from '../middleware/authentication.js';


export const register = async (req, res) => {
    try {
        const { email }  = req.body;
        const user = await findUserByEmail(email)
        throwErrorIfUserExists(user)

        const registeredUserObject = await createNewUser(req.body)
    
        const jwtToken = generateAccessToken(registeredUserObject)
        res.status(201).set('Authorization', `bearer ${jwtToken}`).set('Access-Control-Expose-Headers', '*').send({data: "New user created."});

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

        const loggedIn = await authenticateUserByEmailAndPassword(password, user.password)
        throwErrorIfPasswordIsIncorrect(loggedIn)

        const jwtToken = generateAccessToken(user)
        res.status(200).set('Authorization', `bearer ${jwtToken}`).set('Access-Control-Expose-Headers', '*').send({data: "User Authenticated."});
    } catch (error) {
        console.log(error.message);
        res.status(403).send({error: error.message}); // forbidden
    }
    
};

export const resetPassword = async (req, res) => {

}