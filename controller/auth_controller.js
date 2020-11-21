let database = require("../database");

let authController = {
    login: (req, res) => {
        res.locals.page = "login"
        res.render('auth/login')
    },

    register: (req, res) => {
        res.locals.page = "register"
        res.render('auth/register')
    },

    loginSubmit: (req, res) => {
        console.log(req.body.username)
        console.log(req.body)
        console.log(database[req.body.username])
        if (database[req.body.username] && database[req.body.username].password === req.body.password) {
           req.session['user'] = req.body.username;
           res.redirect("/reminders")
       } else {
           res.send("incorrect username or password")
       }
    },

    registerSubmit: (req, res) => {
        if (req.body.username && req.body.password) {
            database[req.body.username] = {username: req.body.username, password: req.body.password, tags: null, reminders: []}

            console.log(database)
            console.log(req.body.username)

            req.session['user'] = req.body.username;
            res.redirect("/login")
        } else {
            res.status(400)
            res.send("invalid user")
        }

    }
}

module.exports = authController;
