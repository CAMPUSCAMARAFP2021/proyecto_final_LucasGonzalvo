const {model, Schema} = require ('mongoose');

const schema = new Schema({
    movieId: Number,
    name: String,
    year: Number,
    ratings: [{type: Schema.Types.ObjectId, ref:'Rating'}],
    directors: [{type: Schema.Types.ObjectId, ref:'Director'}],
    genres: [{type: Schema.Types.ObjectId, ref:'Genre'}],
    actors: [{type: Schema.Types.ObjectId, ref:'Actor'}],
})

const Movie = model('Movie', schema);
module.exports = Movie;