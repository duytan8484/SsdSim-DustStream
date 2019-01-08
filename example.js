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

function updateStatusWithRetry(endpoint, configuration, status, retryTimes) {
    updateStatus(endpoint, configuration, status, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // Update status success
            // Do nothing
        } else {
            if (0 < retryTimes) {
                retryTimes -= 1;
                setTimeout(() => { updateStatusWithRetry(endpoint, configuration, status, retryTimes) }, 10000);
            }
        }
    });
}

console.log(process.env);