const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Movie Blueprint
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['action', 'adventure', 'comedy', 'documentary', 'drama', 'fantasy', 'horror', 'musical', 'romance', 'scifi'],
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Movie", movieSchema)