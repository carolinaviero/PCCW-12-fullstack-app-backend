const User = require('../model/User');

const addUser = (req, res) => {
    const user = new User(req.body);
    user
        .save()
        .then(user => res.send(user))
        .catch(err => res.send(err))
}

const getAllUsers = (req, res) => {
    User
        .find({})
        .then(users => res.send(users))
        .catch(err => res.send(err))
}

const deleteUser = (req, res) => {
    User
        .deleteOne({ _id: req.params.id })
        .then(() => res.send('User deleted'))
        .catch(err => res.send(err))
}

const updateUser = (req, res) => {
    User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(() => res.send("User updated"))
        .catch(err => res.send(err))

}

module.exports = { addUser, getAllUsers, deleteUser, updateUser };
