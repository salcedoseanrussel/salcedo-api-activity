
const mongoose = require('mongoose');

// This is the "Rule Book" for Money
const transactionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        Minlength: [3, 'Description must be at least 3 characters long'],
    },

    amount: {
        type: Number,
        required: true,
        min: [0.01, 'Amount must be greater than zero'],
    },

    type: {
        type: String,
        // Must be "income" (money in) or "expense" (money out)
        enum: ['income', 'expense'],
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    tags: [String], // Simple array of strings

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Connects to User model
    }
    });

module.exports = mongoose.model('Transaction', transactionSchema);

