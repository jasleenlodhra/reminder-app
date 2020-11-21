# reminder-app

authentication not running yet, comment out: app.get("/reminders", authCheck,reminderController.list)

and replace with: app.get("/reminders",reminderController.list)
