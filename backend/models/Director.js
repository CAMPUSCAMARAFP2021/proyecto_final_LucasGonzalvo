const {model, Schema} = require ('mongoose');

const schema = new Schema({
    name: String,
  })

const Director = model('Director', schema);
module.exports = Director;