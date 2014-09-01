var moment = require('moment'),
    appointments = require('./appointments');

// TODO restrict to district for district admin and filters
module.exports = {
  get: function(callback) {
    var start = moment().startOf('day').subtract(12, 'days');
    var end = moment().startOf('day').add(5, 'days');
    appointments.get(start, end, callback);
  }
};