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
<<<<<<< HEAD
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
=======
router.get('/transactions', getAllTransactions);
router.post('/transactions', createTransaction);
router.get('/transactions/:id', getTransactionById);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction);

module.exports = router;
>>>>>>> 825265ba21dab3e1608cbd7d7e1cb52fb4320362
