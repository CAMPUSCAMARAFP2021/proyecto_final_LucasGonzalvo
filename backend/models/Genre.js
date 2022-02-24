const {model, Schema} = require ('mongoose');

const schema = new schema({
  genreID: Number,
  name: String,
  })

model('Genre', schema);
module.exports = Genre;