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

// Import auth middlewares
const { protect, authorize } = require('../middleware/authMiddleware');

// -------- User Routes --------
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);

// -------- Transaction Routes --------
// ANYONE can view all transactions
router.get('/transactions', protect, authorize('admin', 'manager', 'user'), getAllTransactions);

// ONLY Admins and Managers can create transactions
router.post('/transactions', protect, authorize('admin', 'manager'), createTransaction);

// Get single transaction (Admins, Managers, Users)
router.get('/transactions/:id', protect, authorize('admin', 'manager', 'user'), getTransactionById);

// Update transaction (Admins only)
router.put('/transactions/:id', protect, authorize('admin'), updateTransaction);

// Delete transaction (Admins only)
router.delete('/transactions/:id', protect, authorize('admin'), deleteTransaction);

module.exports = router;