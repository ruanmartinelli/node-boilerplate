const server = require('./src');
const port = process.env.PORT || 9009

server.listen(port, ( err ) => {
  if ( err ) throw err;

  console.log(`Listening on port ${port}`)
})