import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    score: {
        type: Number,
        default: 5
    },
    time: {
        type: Number,
        default: 6
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; 