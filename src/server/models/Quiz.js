import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
	questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
	createdBy: {
		userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        immutable: true
	},
	creationDate: {
		type: Date,
		required: true,
		default: () => Date.now(),
		immutable: true,
	},
});

export default mongoose.model('Quiz', quizSchema);
