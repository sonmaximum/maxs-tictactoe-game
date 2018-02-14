# Project Overview

## Technologies Used

This project is built with JavaScript (primarily) along with HTML, CSS, and a few shell scripts, and makes use of jQuery, AJAX, bootstrap (especially modals), and SASS.

## Development Process

This was my first real JavaScript project, so it was a real learning experience for me, but I feel that the material in the General Assembly trainings prepared me for it well.

I began with [user stories](/assets/userstories.md) and [wireframes](/assets/wireframe.jpg) to guide the experience and design, respectively.

I first coded the basic game logic (outputting the results to the console for feedback). I then implemented user API authentication, browser UI, and game state API authentication, in that order. Finally I ensured that the elements displayed to the users are appropriate for the given state of the application, and then attempted to style the UI.  For each respective feature, I checked out a new branch from master, completed coding, checked and tested on localhost, merged back into master branch, pushed, and deployed.

# Wins

Some things about the project that I'm proud of include the cleanness and simplicity of the gameboard hash (made using a grid display property), the option to play against a computer (although it's completely dumb; it just plays randomly), and the updating game stats on the right side.

# Challenges

The three biggest challenges I faced were:

1. The styling, which I mostly just accomplished by trial and error.

2. Making sure the game state in the UI, in the local javascript logic, and in the API were in sync, since these features were implemented separately. Diligent use of console logging and checking the state of each at various points of play were helpful for this.

3. Resetting game state upon new game. There was some issue with the gameboard in the logic or in the API not updating along with the UI on subsequent games (likely a result of not being properly synced, as in (2.) above), which was solved by explicitly passing the state of the current game board in to each respective function.

# Future Directions

For future work, I would like to implement inter-device multiplayer, as well as improve the responsive design of the UI with mobile devices in mind (currently the application can be played on mobile devices but the interface is very poor) and add some strategy to the AI player. Also, it's currently difficult but possible for a user to click in two boxes before the computer makes a move, which will cause the wrong tokens to be assigned to each player. I would like to guard against clicking in more than one box before the computer moves.
