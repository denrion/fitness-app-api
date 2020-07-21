const express = require('express');
const {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} = require('../controllers/userController');
const Role = require('../constants/Role');
const isAuth = require('../middleware/isAuth');
const restrictTo = require('../middleware/restrictTo');

const router = express.Router();

// Routes below will go through both isAuth & restrictTo middleware first
router.use(isAuth, restrictTo(Role.ADMIN));

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
