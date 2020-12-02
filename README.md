## Group Members
Jasleen Lodhra A01208987

Sajjin Nijjar A01055657

Mariah Mirzayan A01179440

## Installation
Use the package manager npm to install dependencies

```git clone https://github.com/jasleenlodhra/reminder-app.git```

In the terminal, run
 ```npm install```

## Usage
In the terminal, run 
```npm start```

## Contributing
Pull requests are welcome. For major changes, please open an issue to discuss what you would like to change.

Please make sure changes are made in their appropriate files:

Changes to authentication functions: auth_controller.ejs; add corresponding app.get/app.post requests to index.ejs

Changes to reminder functions: reminder_controller.ejs; add corresponding app.get/app.post requests to index.ejs

Changes to page layouts: corresponding ejs file

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Incomplete/Missing Tasks
```
Task 1: Sign up button leading to sign up page with the email already filled out
-The sign up button leads to the sign up page
-The email is not filled out when you click the button

Task 2: Add Friend Function
-Add friend function works with static/hard-coded users but not dynamically
-If the user refreshes the page, the previously specified user is added for each refresh
-Want to use a similar method of create reminder

Task 3: Delete Friend Function
-Delete function works the same as add friend function
-Want to use a similar method of user removal that is used for deletion of a task/reminder that is already implemented

Task 4: Active Link
-Active link works when you change the page
-In order to use active links, an if statement was used: else statement makes the default active link the Reminder List page (do not have to click Reminder List page to make it active the first time you login)

Task 5: Profile Pictures
-Profile pictures are not available in our app
-Make a place for profile pictures and use a database like unsplash to randomly pick an image url which will be appended to the fake database

Task 6: API
-The Google Calendar API runs fine but testers with a Google Calendar must be added to the API authorization before they can use the API in the reminder app
