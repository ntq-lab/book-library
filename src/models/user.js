module.exports = mongoose => {
	const userSchema = mongoose.Schema({
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	});

	return mongoose.model('User', userSchema);
};
