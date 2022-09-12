const express = require("express");
const { addUser, getAllUsers, deleteUser, updateUser } = require('../controllers/user-controller');
const router = express.Router();

router.post('/', addUser);

router.get('/', getAllUsers);

router.delete('/:id', deleteUser)

router.put('/:id', updateUser)

module.exports = router;