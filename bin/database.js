const mongoose = require("mongoose");

const URI = "";

mongoose.connect(URI)
.then(db=>console.log("DB esta conectado"))
.catch(error=>console.error(error));

module.exports= mongoose;