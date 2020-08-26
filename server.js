// //Install express server
// const express = require('express');
// const path = require('path');
 
// const app = express();
 
// // Serve only the static files form the angularapp directory
// app.use(express.static(__dirname + '/angularapp'));
 
// app.get('/*', function(req,res) {
 
// res.sendFile(path.join(__dirname+'/angularapp/index.html'));
// });
 
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
//Install express server
const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const app = express();
app.use(compression());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// Serve only the static files form the dist directory
console.log(__dirname);
app.use(express.static(__dirname.replace('/server','')+ '/dist/book-shop'));
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname.replace('/server','')+'/dist/book-shop/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);