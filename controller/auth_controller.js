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
        let username = req.body.username.split("@")[0]
        if (database[username] && database[username].password === req.body.password) {
            req.session['user'] = username;
            res.redirect("/reminders")
        } else {
            res.send("incorrect username or password")
        }
    },

    registerSubmit: (req, res) => {
        let username = req.body.username.split("@")[0]
        if (req.body.username && req.body.password) {
            database[username] = {username: username, password: req.body.password, reminders: []}
            req.session['user'] = username;
            res.redirect("/reminders")
        } else {
            res.status(400)
            res.send("invalid user")
        }

    }
}

module.exports = authController;