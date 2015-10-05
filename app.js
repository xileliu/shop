var express = require('express');
var path = require('path');
app = express();

app.use(express.static(path.join(__dirname,'app','public')));

app.listen(8080);