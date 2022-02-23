const {model, Schema} = require ('mongoose');

const schema = new schema({
    name: String,
  })

model('Genre', schema);
module.exports = Genre;