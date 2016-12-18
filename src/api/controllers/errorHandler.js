function errorHandler(controller) {
	return (req, reply) => {
		return controller(req, reply)
			.catch((err) => {
				return reply(err);
			});
	}
}

module.exports = errorHandler;
