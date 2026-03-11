const Transaction = require('../models/transactionModel');
const User = require('../models/userModel'); // <-- import User model

// 1. GET ALL
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. CREATE
const createTransaction = async (req, res) => {
    try {
        const { user } = req.body;

        // Validate user if provided
        if (user) {
            const existingUser = await User.findById(user);
            if (!existingUser) {
                return res.status(400).json({ message: 'Invalid user ID' });
            }
        }

        const newTransaction = await Transaction.create(req.body);
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3. GET ONE
const getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. UPDATE
const updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        if (!transaction) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. DELETE
const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Not found' });
        res.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
};

module.exports = {
    getAllTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
};
