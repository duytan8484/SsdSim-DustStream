var fs = require('fs');
var request = require('request');

function updateStatus(endpoint, configuration, status, callback) {
    var url = endpoint + '/api/jobs/' + configuration.jobId + '/' + status;
    request({
        url: url,
        method: 'POST',
        json: true,
        body: configuration,
        headers: {
            'x-api-key': '0I_xh&qh1?,1DBz>lZ]bIwNisc,aB83+_XaC):7M!cG6w:dRK}]Q}dCE9VIijq>f'
        }
    }, callback);
}

var riverflowEndpoint = process.env.RIVERFLOWENDPOINT;
var riverflowConfiguration = JSON.parse(process.env.RIVERFLOWCONFIGURATION);

// Update link for to console log
riverflowConfiguration.consoleLog = "   ";

// TODO: Status should be depended on previous steps
updateStatus(riverflowEndpoint, riverflowConfiguration, 'Success', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Do nothing here
    } else {
        console.log(error);
    }
});