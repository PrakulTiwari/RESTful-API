const mongoose = require('mongoose')
const Schema = mongoose.Schema



const Geoschema = new Schema({
    type: {
        default: "Point",
        type: String
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

const pandatSchema = new Schema({
    name: {
        type: String,
        required: [true, 'this field is required']
    },
    rank: {
        type: String
    },
    availability: {
        type: Boolean,
        default: false
    },
    geometry: Geoschema
})

const pandat = mongoose.model('restapi', pandatSchema)

module.exports = pandat;

