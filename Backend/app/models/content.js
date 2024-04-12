const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, enum: ['image', 'video', 'text'], required: true },
    contentUrl: { type: String, required: true },
    category: { type: String, required: true },
    theme: { type: String, required: true }
},
{
    versionKey: false,
    timestamps: true
}
);

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;