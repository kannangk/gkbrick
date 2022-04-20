require('module-alias/register')
const cluster = require('cluster')
const os = require('os')
const http = require('http')
const { app } = require('./app')
const { Route } = require('./core/Route')

class App extends Route {
  init() {
   
       //init default route
      // app.use(super.init())
       // listenint server port
       var port = process.env.PORT || 5000;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('Running on port ' + port + '.');
});
     
  }
}

new App().init()
