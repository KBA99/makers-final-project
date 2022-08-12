import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: false,
		lowercase: true
	},
    password: {
        type: String,
    },
	dateOfCreation: {
		type: Date,
		required: true,
        default: () => Date.now(),
        immutable: true
	},
	lastLoginDate: {
		type: Date,
		required: true,
        default: () => Date.now()
	},
    openedQuiz: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quiz'}],
    completedQuiz: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quiz'}],
    createdQuiz: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quiz'}]
})

export default mongoose.model('User', userSchema)