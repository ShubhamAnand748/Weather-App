var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
    .options('location', {
            demand: false,
            alias: 'l',
            description: 'Your Location...',
            type: 'string'
    })
    .help('help')
    .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
    console.log('Location saved - ' +argv.l+ '\nYour current location is : ' +argv.l);
    // weather(argv.l, function (currentWeather) {
    //     console.log(currentWeather);
    // });
    weather(argv.l).then(function(currentWeather) {
        console.log(currentWeather);
    }).catch(function(error) {
        console.log(error);
    })
} else {
    console.log('No location found...');
    // location (function (location) {
    //     if (location) {
    //         weather (location.city, function (currentWeather) {
    //             console.log(currentWeather);
    //         });
    //     } else {
    //         console.log('unable to guess location...');
    //     }
    // });
    location().then(function (loc) {
        return weather(loc.city);
    }).then(function(currentWeather) {
        console.log(currentWeather);
    })
    .catch(function(error) {
        console.log(error);
    })
}