const {model, Schema} = require ('mongoose');

const schema = new schema({
    
    ratings: [{type: Schema.Types.ObjectId, ref:'Rating'}],
    directors: [{type: Schema.Types.ObjectId, ref:'Director'}],
    genres: [{type: Schema.Types.ObjectId, ref:'Genre'}],
    actors: [{type: Schema.Types.ObjectId, ref:'Actor'}],
})

model('User', schema);