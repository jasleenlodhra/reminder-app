let database = require("../database");

let remindersController = {
  // Show a list of reminders
  list: (req, res) => {
    let username = req.session.user
    res.render('reminder/index', { reminders: database[username].reminders })
  },

  // Add a Friends Page
  updateFriendsPage: (req, res) => {
    res.locals.page = 'addFriend'
    let allUsers = Object.keys(database)
    res.render("reminder/friends", { allUsers });
  },

  // Add Friend
  // addFriend: (req, res) => {
  //   let username = req.session.user
  //   console.log(req.query);
  //   let friend = req.query.username;
  //   console.log(friend);
  //   // Insert into currently logged user's friends array
  //   database[username].friends.push(friend);
  //   res.render("reminder/updateFriend", { friendList: database[username].friends })
  // },

  // Add Friend
  addFriend: (req, res) => {
    res.locals.page = 'friends'
    console.log(req.query);
    let friend = req.query.username;
    console.log(friend);
    // Insert into currently logged user's friends array
    database.cindy.friends.push(friend);
    console.log(database) // noice
    res.render("reminder/updateFriend", { friendList: database.cindy.friends})
  },

  // // Delete a Friend
  // deleteFriend: (req, res) => {
  //   let username = req.session.user
  //   console.log(req.query);
  //   let friendToFind = req.query.username;
  //   let searchResult = database[username].friendList.find(function (friend){
  //     return friendList.id == friendToFind;
  //   })
  //   let removeIndex = database[username].friendList.map(function (item) {
  //     return item.id
  //   }).indexOf(searchResult.id);
  //   database[username].friends.splice(removeIndex, 1)
  //   res.redirect('reminders/addFriend');

  // Remove Friend
  removeFriend: (req, res) => {
      // let username = req.session.user
      let friend = req.query.username;

      for (let i=0; i<database.cindy.friends.length; i++){
        if (database.cindy.friends.length[i] === friend){
          database.cindy.friends.splice(i,1)
        }
      }
      res.redirect('reminders/updateFriend', { friendList: database.cindy.friends});
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.locals.page = 'create';
    res.render('reminder/create');
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    let username = req.session.user
    let reminderToFind = req.params.id;
    let searchResult = database[username].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult !== undefined) {
      res.render('reminder/single-reminder', {reminderItem: searchResult})
    } else {
      res.render('reminder/index', {reminders: database[username].reminders})
    }
  },

  // Create a reminder
  create: (req, res) => {
    let username = req.session.user

    let reminder = {
      id: database[username].reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      subtasks: req.body.subtasks,
      completed: false
    }
    database[username].reminders.push(reminder);
    console.log(database)
    console.log(database[username].reminders)
    
    // database.cindy.reminders.push(reminder);
    res.locals.page = 'reminder list'
    res.redirect('/reminders');
  },

  // Show the Edit Reminder Page
  edit: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let username = req.session.user

    let reminderToFind = req.params.id;
    let searchResult = database[username].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    res.render('reminder/edit', {reminderItem: searchResult})
  },

  // Edit the Reminder
  update: (req, res) => {
    // ⭐️ your implementation here ⭐
    let username = req.session.user
    let reminderToFind = req.params.id;
    let searchResult = database[username].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    let removeIndex = database[username].reminders.map(function (item) {
      return item.id;
    }).indexOf(searchResult.id);
    database[username].reminders.splice(removeIndex, 1)
    let reminder = {
      id: database[username].reminders.length,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags.split(","),
      subtasks: req.body.subtasks.split(","),
      completed: req.body.completed == "true"
    }
    database[username].reminders.push(reminder);
    res.redirect('/reminders');
  },

  // Delete the Reminder
  delete: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let username = req.session.user
    let reminderToFind = req.params.id;
    let searchResult = database[username].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    let removeIndex = database[username].reminders.map(function (item) {
      return item.id;
    }).indexOf(searchResult.id);
    database[username].reminders.splice(removeIndex, 1)
    res.redirect('/reminders');
  }
}

module.exports = remindersController;