import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
	question: String,
	correctAnswer: String,
	option1: String,
	option2: String,
	option3: String,
	createdBy: {
		userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        // immutable: true
	},
	creationDate: {
		type: Date,
		required: true,
		default: () => Date.now(),
		immutable: true
	},
});

export default mongoose.model('Question', questionSchema);
