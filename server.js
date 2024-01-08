// importing libraries that we installed using npm
const express = require('express');
const app = express()

//routes
app.get('/', (req,res) => {
    res.render("index.ejs")
});

app.get('/login', (req,res) => {
    res.render("login.ejs")
});

app.get('/register', (req,res) => {
    res.render("register.ejs")
});

//end router
app.listen(8000)