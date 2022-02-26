const {model, Schema} = require ('mongoose');

const schema = new Schema({
    name: String,
    email: String,
    password: String,
    views: [
        {type: Schema.Types.ObjectId, ref:'View'}
    ]
})

const User = model('User', schema);
module.exports = User;