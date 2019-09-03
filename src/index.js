const express = require('express')

require('./db/mongoose.js')

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter, taskRouter)


app.listen((port),()=>{
    console.log("App is running on port " + port)
})
