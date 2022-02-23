const {model, Schema} = require ('mongoose');

const schema = new schema({
    ID_Name: String,
    name: String,
    email: String,
    views: [
        {type: Schema.Types.ObjectId, ref:'View'}
    ]
})

model('User', schema);
module.exports = User;