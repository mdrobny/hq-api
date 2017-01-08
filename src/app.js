const co = require('co');
const Hapi = require('hapi');
const joi = require('joi');

const server = new Hapi.Server();

const errorHandler = require('./controllers/errorHandler');
const getAirStatus = require('./controllers/air/getAirStatus');
const getCpuStatus = require('./controllers/cpu/getCpuStatus');

const config = require('./config');

server.connection({
    host: 'localhost',
    port: config.api.httpPort
});

server.route({
	method: 'GET',
	path: '/cpu/status',
	handler: errorHandler(getCpuStatus),
    config: {
        validate: {
            query: {
                startDate: joi.date().iso().required(),
                endDate: joi.date().iso().required()
            }
        }
    }
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
