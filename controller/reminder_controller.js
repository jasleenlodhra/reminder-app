let database = require("../database");

let remindersController = {
  // Show a list of reminders
  list: (req, res) => {
    res.render('reminder/index', { reminders: database.cindy.reminders })
  },

  // Add a Friends Page
  addFriendsPage: (req, res) => {
    let allUsers = Object.keys(database)
    res.render("reminder/friends", {allUsers});
  },

  // Add Friend
  addFriend: (req, res) => {
    console.log(req.query);
    let friend = req.query.username;
    console.log(friend);
    // Insert into currently logged user's friends array
    database.cindy.friends.push(friend);
    console.log(database) // noice
    res.render("reminder/addFriend", { friendList: database.cindy.friends})
    // res.redirect('/reminder/' + reminderToFind)
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.locals.page = 'create';
    res.render('reminder/create');
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult !== undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  // Create a reminder
  // ⚠️ TODO: Currently hardcoded to always create a reminder for Cindy only. You need to make this dynamic. 
  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      completed: false
    }
    database.cindy.reminders.push(reminder);
    res.locals.page = 'reminder list'
    res.redirect('/reminders');
  },

  // Show the Edit Reminder Page
  edit: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    res.render('reminder/edit', { reminderItem: searchResult })
  },

  // Edit the Reminder
  update: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    let removeIndex = database.cindy.reminders.map(function(item) { return item.id; }).indexOf(searchResult.id);
    database.cindy.reminders.splice(removeIndex, 1)
    let reminder = {
      id: database.cindy.reminders.length,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags.split(","),
      completed: req.body.completed == "true"
    }
    console.log(reminder)
    database.cindy.reminders.push(reminder);
    console.log(database.cindy.reminders)
    res.redirect('/reminders');
  },

  // Delete the Reminder
  delete: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToDelete = req.params.id;
    for (let i=0; i<database.cindy.reminders.length; i++){
      if (database.cindy.reminders[i].id == reminderToDelete){
        database.cindy.reminders.splice(i,1)
      }
    }
    res.redirect('/reminders')
  }
}
module.exports = remindersController;