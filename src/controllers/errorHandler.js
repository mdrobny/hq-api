function errorHandler(controller) {
	return (req, reply) => {
		return controller(req, reply)
			.catch((err) => {
				console.log(err.stack)
				return reply(err);
			});
	}
}

module.exports = errorHandler;
