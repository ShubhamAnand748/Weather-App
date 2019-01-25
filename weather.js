var request = require('request');

module.exports = function (location) {
    return new Promise(function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=823ee3e8437ccd1004c649ade32c19a1';

        encodeURIComponent(location);

        if (!location) {
            return reject('No location provided...');
        }
        request({
            url: url,
            json: true,
        }, function (error, response, body) {
            if (error) {
                reject('Unable to fetch weather...')
            } else {
                //callback(JSON.stringify(body, null, 4));
                resolve('It\'s ' + body.main.temp + ' kelvin in ' + body.name + '!');
            }
        });
    });
}