const {model, Schema} = require ('mongoose');

const schema = new schema({
    
    user: [
        {type: Schema.Types.ObjectId, ref:'User'}
    ],
    movie: [
        {type: Schema.Types.ObjectId, ref:'Movie'}
    ]
})

model('View', schema);
module.exports = View;