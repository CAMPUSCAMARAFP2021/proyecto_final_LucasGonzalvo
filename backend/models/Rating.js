const {model, Schema} = require ('mongoose');

const schema = new schema({
    mark: int,
    view: [{type: Schema.Types.ObjectId, ref:'View'}],
    user: [{type: Schema.Types.ObjectId, ref:'User'}],
  })

model('Rating', schema);
module.exports = Rating;