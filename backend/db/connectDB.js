import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb+srv://aman100:aman104@nodetuts.sfzoomu.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts');
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	}
};
