const userController = require('./user-controller');

function init ( app ) {
    app.get('/users', userController.get);
}

module.exports.init = init;