const app = require( 'express' )();
const bodyParser = require( 'body-parser' );

// constants
app.set( 'PORT', (process.env.PORT || 9009) );

// middlewares
app.use( bodyParser.json() );

// start app
require( './app' ).init( app );

module.exports = app;