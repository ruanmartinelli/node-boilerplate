const userService = require('./user-service');

function get( req, res, next ){
    const users = userService.get();

    // when async, pipes errors to next
    // next(Promise.reject(error.validation("error updating user")))

    res.send(users);
}


module.exports.get = get;