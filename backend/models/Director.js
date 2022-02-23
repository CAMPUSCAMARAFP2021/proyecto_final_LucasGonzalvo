const {model, Schema} = require ('mongoose');

const schema = new schema({
    directorId: Number,
    name: String,
  })

model('Director', schema);
module.exports = Director;