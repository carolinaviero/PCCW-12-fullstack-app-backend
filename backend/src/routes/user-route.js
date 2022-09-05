const express = require("express");
const { addUser, getAllUsers, deleteUser, updateUser } = require('../controllers/user-controller');
const router = express.Router();

router.post('/', addUser);

router.get('/', getAllUsers);

router.delete('/', deleteUser)

router.put('/', updateUser)

module.exports = router;