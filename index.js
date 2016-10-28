const server = require('./server');
const port = process.env.PORT || 9009

server.listen(port, ( err ) => {
  if ( err ) throw err;

  console.log(`Listening on port ${port}`)
})