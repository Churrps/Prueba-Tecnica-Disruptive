const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    allowedContentTypes: { images: Boolean, videos: Boolean, texts: Boolean}
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;