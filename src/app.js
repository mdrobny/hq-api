'use strict';

const co = require('co');
const Hapi = require('hapi');

const server = new Hapi.Server();

const getAir = require('./controllers/getAir');

server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path:'/air',
    handler: getAir
});

co(function* () {
    yield server.start();

    console.log('Server running at:', server.info.uri);
}).catch(console.error);
