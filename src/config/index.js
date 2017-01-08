module.exports = {
	redis: {
		host: process.env.REDIS_HOST || '127.0.0.1',
		port: process.env.REDIS_PORT || '6379',
		keyPrefix: 'hq:'
	},
	api: {
		httpPort: process.env.HTTP_PORT || 8000
	}
};
