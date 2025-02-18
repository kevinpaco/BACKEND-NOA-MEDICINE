const {mongoose} = require("./database");
const express = require('express');

var app = express();

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'), ()=>{console.log(`servidor corriendo en: ${app.get('port')}`)});
