const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
    },
}, { timestamps: true });

userSchema.methods.generateJWT = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            number: this.number,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '7d' }
    );
    return token; // Don't forget to return the generated token
};

module.exports = mongoose.model('User', userSchema); // Export the User model
