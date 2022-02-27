const {model, Schema} = require ('mongoose');

const schema = new Schema({
    name: String,
    year: Number,
    plot: String,
    user: {type: Schema.Types.ObjectId, 
    ref: 'User'},
    director: {type: Schema.Types.ObjectId,
    ref: 'Director'}    
})

const Movie = model('Movie', schema);
module.exports = Movie;


//{
  //  "movie": {
    //    "name": "Fight Club",
      //  "year": "1999"
    //}
//}