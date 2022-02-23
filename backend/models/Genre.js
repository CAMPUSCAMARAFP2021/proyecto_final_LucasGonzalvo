const {model, Schema} = require ('mongoose');

const schema = new schema({
    name: int,
  })

model('Genre', schema);
module.exports = Genre;