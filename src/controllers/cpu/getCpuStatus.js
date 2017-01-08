const co = require('co');

const redis = require('../../redis');
const { CPU } = require('../../config/const');

function* getCpuStatus(req, reply) {
	let { startDate, endDate } = req.query;

	startDate = new Date(startDate).getTime();
	endDate = new Date(endDate).getTime();

	let results = yield redis.zrangebyscore(CPU.SET_NAME, startDate, endDate);

	results = results.map(r => JSON.parse(r));

  return reply({
  	results
  });
}

module.exports = co.wrap(getCpuStatus);
