const {model, Schema} = require ('mongoose');

const schema = new Schema({
    name: String,
  })

const Actor = model('Actor', schema);
module.exports = Actor;