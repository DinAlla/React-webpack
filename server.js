const express = require('express');
const PORT = 1164;
const PUBLIC_PATH = __dirname;
const app = express();
const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.json();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/dataChecking", (req, res) => {
  let toRes  = {
    token: 'token',
    userName: req.body.userNameToFetch
  };
  res.send(toRes);
});

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT + '...');
});