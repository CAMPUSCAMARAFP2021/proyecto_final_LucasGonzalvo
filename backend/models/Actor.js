const {model, Schema} = require ('mongoose');

const schema = new schema({
    actorId: Number,
    name: String,
  })

model('Actor', schema);
module.exports = Actor;