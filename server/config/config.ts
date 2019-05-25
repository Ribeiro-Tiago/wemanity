import * as env from "dotenv";

env.config();

export default {
	env: process.env.NODE_ENV,
	port: process.env.SERVER_PORT,
	mongooseDebug: process.env.MONGOOSE_DEBUG,
	mongo: {
		host: process.env.MONGO_HOST,
		port: process.env.MONGO_PORT
	}
};