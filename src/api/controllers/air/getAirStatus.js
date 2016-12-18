'use strict';

const co = require('co');

function* getAirStatus(req, reply) {
    return reply({
        detectorId: 0,
        results: [
            {
                datetime: '2016-10-10T15:00:00',
                humidity: 14,
                temperature: 18.2
            },
            {
                datetime: '2016-10-10T15:01:00',
                humidity: 14.3,
                temperature: 18.3
            },
            {
                datetime: '2016-10-10T15:02:00',
                humidity: 14.6,
                temperature: 18.2
            }
        ]
    });
}

module.exports = co.wrap(getAirStatus);
