const {model, Schema} = require ('mongoose');

const schema = new Schema({
    name: String,
    email: String,
    password: String,
    movies  : [{type: Schema.Types.ObjectId, ref:'Movie'}]

})

const User = model('User', schema);
module.exports = User;