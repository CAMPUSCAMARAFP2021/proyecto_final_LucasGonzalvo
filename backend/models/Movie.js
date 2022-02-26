const {model, Schema} = require ('mongoose');

const schema = new Schema({
    name: String,
    year: Number,
    directors: [{type: Schema.Types.ObjectId, ref:'Director'}],
    
})

const Movie = model('Movie', schema);
module.exports = Movie;


//{
  //  "movie": {
    //    "name": "Fight Club",
      //  "year": "1999"
    //}
//}