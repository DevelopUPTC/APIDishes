const mongoose = require('mongoose')

const URI = "mongodb+srv://jairoarmando:FvpyKzzDs4anFwMZ@cluster0.n99bjxu.mongodb.net/?retryWrites=true&w=majority"  

const OPTIONS = {
  useNewUrlParser : true,
  useUnifiedTopology: true
}

mongoose.connect(URI,OPTIONS)
  .then(()=>console.log('Connect DB Success'))
  .catch((err)=>console.log(err))

  module.exports = mongoose