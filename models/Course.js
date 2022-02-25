var mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Course = new Schema({
    // id: ObjectId,
    name: { type: String, required: true},
    description: { type: String, default: ''},
    image: { type: String, default: ''},
    videoId: { type: String, required: true},
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', Course);