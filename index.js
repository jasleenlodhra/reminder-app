const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const authCheck = require("./auth_functions/authcheck")
const cookieSession = require("cookie-session")

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

app.use(cookieSession ({
  name: "session",
  keys: ["aaa", "bbb", "ccc"],
  maxAge: 10*24*3600*1000
}))

app.set("view engine", "ejs");
// Routes start here

// Add/Remove Friends
app.get("/reminder/friends", reminderController.updateFriendsPage)
// app.get("/addFriend/:username", reminderController.addFriend)
app.get("/updateFriend", reminderController.addFriend)
app.get("/updateFriend", reminderController.removeFriend)

app.get("/reminders", authCheck,reminderController.list)

// Create a Reminder
app.get("/reminder/new", reminderController.new)
app.post("/reminder/", reminderController.create)

// Show one single reminder
app.get("/reminder/:id", reminderController.listOne)

// Edit a reminder
app.get("/reminder/:id/edit", reminderController.edit) // Show the page to edit a reminder
app.post("/reminder/update/:id", reminderController.update) // Edit the reminder

// Delete a reminder
app.post("/reminder/delete/:id", reminderController.delete)

// Authentication
app.get("/register", authController.register)
app.post("/register", authController.registerSubmit)


app.get("/login", authController.login)
app.post("/login", authController.loginSubmit)


app.listen(3001, function () {
  console.log("Server running. Visit: localhost:3001/ in your browser 🚀");
});
