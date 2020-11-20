const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    articleTitle: { type: String, required: true},
    heroImage: {type: String, required: true},
    urlRessource: {type: String, required: true},
    description: {type: String, required: true},
})

module.exports = mongoose.model('article', articleSchema);