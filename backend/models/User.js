const {model, Schema} = require ('mongoose');

const schema = new schema({
    name: string,
    views: [
        {type: Schema.Types.ObjectId, ref:'View'}
    ]
})

model('User', schema);