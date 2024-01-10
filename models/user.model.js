const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// export const User = User;
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email format']
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    videoPath: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
// export default User;
// export default mongoose.model('User', userSchema);
