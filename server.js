const express = require('express');
const PORT = 8052;
const PUBLIC_PATH = __dirname;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/loading", async(req, res)=>{
  console.log("Loading in server " + req.body.toFetch.userNameToFetch + req.body.toFetch.passwordToFetch);
  let tryFetch = {
    token: 'token', 
    userName: req.body.toFetch.userNameToFetch
  };
  res.json(tryFetch);
});

app.use("/*",(req, res)=>{
  res.sendFile(PUBLIC_PATH + '/public/index.html');
});


app.listen(PORT, function(){
    console.log('Listening on port ' + PORT + '...');
});