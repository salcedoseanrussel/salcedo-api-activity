const express = require('express');
const router = express.Router();

// Import Controllers
const UserController = require('../controllers/userController');
const {
    getAllTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
} = require('../controllers/transactionController');

// -------- User Routes --------
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);

// -------- Transaction Routes --------
router.get('/transactions', getAllTransactions);
router.post('/transactions', createTransaction);
router.get('/transactions/:id', getTransactionById);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction);

module.exports = router;
