const {model, Schema} = require ('mongoose');

const schema = new schema({
    name: string,
    email: string,
    views: [
        {type: Schema.Types.ObjectId, ref:'View'}
    ]
})

model('User', schema);
module.exports = User;