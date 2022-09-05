const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'user-manager';

mongoose.connect(`${connectionURL}/${databaseName}`, {
    useNewUrlParser: true,
});