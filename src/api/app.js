const co = require('co');
const Hapi = require('hapi');

const server = new Hapi.Server();

const errorHandler = require('./controllers/errorHandler');
const getAirStatus = require('./controllers/air/getAirStatus');
const getCpuUsage = require('./controllers/cpu/getCpuUsage');

const config = require('../config');

server.connection({
    host: 'localhost',
    port: config.HTTP_PORT
});

server.route({
	method: 'GET',
	path: '/cpu/usage',
	handler: errorHandler(getCpuUsage)
});

server.route({
    method: 'GET',
    path:'/air/status',
    handler: errorHandler(getAirStatus)
});

co(function* () {
    yield server.start();

    console.log('Server running at:', server.info.uri);
}).catch(console.error);
