import mongoose from 'mongoose';

const schema = new mongoose.Schema({
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		passwordHash: {
			type: String,
			required: true,
		},
		avatarUrl: String
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('User', schema);