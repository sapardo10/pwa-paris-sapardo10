'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 2000;

class ApiAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'first-api-audit',
            description: 'First call to api done',
            failureDescription: 'The first call to the api was too slow',
            helpText: 'Used to measure the time it took the webpage to call the api for the first time',

            requiredArtifacts: ['TimeToApi']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToApi;

        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = ApiAudit;