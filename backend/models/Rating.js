const {model, Schema} = require ('mongoose');

const schema = new schema({
    
    view: [{type: Schema.Types.ObjectId, ref:'View'}],
    user: [{type: Schema.Types.ObjectId, ref:'User'}],
  })

model('User', schema);