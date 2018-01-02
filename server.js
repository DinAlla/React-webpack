const express = require('express');
const PORT = 7010;
const PUBLIC_PATH = __dirname;
const app = express();

app.use(express.static(__dirname + '/public'));

//не знаю как правильно ответить на запрос
app.use("/loading", (req, res)=>{
  res.end({token: 'token', userName: req.userName});
});

app.use("/*",(req, res)=>{
  res.sendFile(PUBLIC_PATH + '/public/index.html');
});

app.listen(PORT, function(){
    console.log('Listening on port ' + PORT + '...');
});