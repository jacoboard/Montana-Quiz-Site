import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    game: {
        type: Number,
        default: 0,
    },
    score: {
        type: Number,
        default: 1,
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;