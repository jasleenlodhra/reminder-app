# reminder-app

authentication not running yet, in index.js comment out: `app.get("/reminders", authCheck,reminderController.list) (line 25)`

and replace with: `app.get("/reminders",reminderController.list)`
