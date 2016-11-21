const user = require('./user');

// initializes api and middlewares
// order does matter
module.exports.init = ( app ) => {
    user.init( app );
}

