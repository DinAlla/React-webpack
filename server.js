const express = require('express');
const PORT = 7370;
const PUBLIC_PATH = __dirname;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  res.sendFile(PUBLIC_PATH + '/public/index.html');
});

app.listen(PORT, function(){
    console.log('Listening on port ' + PORT + '...');
});