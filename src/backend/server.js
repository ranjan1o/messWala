const express = require('express')
const connect = require('./config/db')


const usersController = require('./controllers/user.controller')
const messController = require('./controllers/mess.controller');
const mealController = require('./controllers/meal.controller')
const app = express();
const cors = require("cors")
app.use(cors())

app.use(express.json())

app.use("/messes", messController)
app.use("/users", usersController)
app.use("/meals", mealController)
app.listen(8000, async function () {
    await connect()
    console.log("listening on port 8000")
});