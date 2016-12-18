const co = require('co');

const getCurrentCpuUsage = require('../../../common/cpu/getCurrentCpuUsage');

function* getCpuUsage(req, reply) {
	const cpuUsage = yield getCurrentCpuUsage();
	const datetime = new Date().toISOString();

  return reply({ datetime, cpuUsage });
}

module.exports = co.wrap(getCpuUsage);
