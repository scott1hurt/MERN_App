/*Creating zMongoose dchems thsg we use to mkae sure data we send to our Mongo database is formatted correctly */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
{
    id: Number, 
    message: String
}, 
{ timestamps: true }
);
module.exports = mongoose.model('Data', DataSchema);