const express = require('express');
const app = express();
const cors = require("cors");
const userRouter = require('./src/routes/user-route');
const port = 8000;
require('./src/db/mongoose')

app.use(express.json());
app.use(cors());

app.use("/users", userRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))