const express = require('express')
const userRoutes = require('./user.routes')
const authRoutes = require('./auth.routes')


const app = express()

app.use('/user', userRoutes)
app.use('/auth', authRoutes)

app.use((req, res) => {
    res.status(404).send("Esta ruta no existe");
});

module.exports = app;