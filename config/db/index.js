const mongoose = require('mongoose');

const connect = async () => {
	try {
		// await mongoose.connect('mongodb://127.0.0.1:27017/learn-nodejs-education');
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connect Successfully!!!');
	} catch (error) {
		console.log('Connect Failure!!!');
		console.log(error);
	}
};

module.exports = { connect };
