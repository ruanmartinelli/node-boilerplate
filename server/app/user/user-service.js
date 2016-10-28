const userModel = require('./user-model');

function get( ) {
    let users = userModel.get();

    // applies logic
    return users.filter((user) => user.status === 'ACTIVE');
}

module.exports.get = get;