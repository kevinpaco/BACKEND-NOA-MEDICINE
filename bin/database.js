const mongoose = require("mongoose");
const URI = require ('../config.js')
// const URI ="mongodb://127.0.0.1/DB_NOA_MEDICINE";

mongoose.connect(URI)
    .then(db => console.log("DB esta conectado"))
    .catch(error => console.error(error));

module.exports = mongoose;