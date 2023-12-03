# simon-html

 Have you ever wanted to see who is the best at something in your friend group? 
        Whether it be a beta male game like playing chess or playing a full on 1 v 1 tournament 
        playing smash brothers or basketball or something of the sort. And you wanted a cool way 
        to be able to do it at the spot. Wouldn’t it be cool to have some sort of website 
        automatically do that for you while giving the participants options to bet on which 
        of the players would win beforehand and keep track of the scores of each games per 
        participant. That would be epic!

    My name is Michael Harris and I accidentally deleted the orignal respository for when we 1st branded our 
        idea for the first 100 point assignment we had. This is a recreation of it, as well as the full website 
        i will be changing throughout the semester. That is why I am missing a ton of other stuff in this README.md, that'll I'll have to go back and change and rewrite everything. With an image of the tourney bracket I want it to look like. 

(REQUIRED STARTUP HTML)
I modified the play.html creating tables of (8 player) players, their scores, and organized it in a way that reveals if they are in the semi's or finals or not. It isn't completed yet but it is a start. Also got the link on my about page. I changed the login to include a password. I changed the idea of a betting system to a websocket of a live chat while the tournament is going. I also changed how the scoring system will work that'll list the losers from the beginning to the end. SO if you got 2nd at the tournament you'll be listed last. 

I'm just learning a bit of the HTML, I learned a bit about classes and div and how to properly set up selectors and options for my players and score board. HTML is much difficult but easier to use at the same time for me. But its refreshing to use a lot of sources on the web to understand better how to create the brackets. 

(REQUIRED STARTUP CSS)
4 new css files for "play, scores, styles, and about".

Modified HTML file for play in order for it to contain the players. Used flex to center some of my content around. Add an image to the background of the main and about page. I may modify the page as time goes by, because I'm still unsatisfied with it. Used footers, main, nav, and edited everything i could onto the page. Will most definitely be fixing more and more of it throughout the semester. Added an actual table to both play and the scores page, and added more bars for the players. 

(REQUIRED STARTUP JAVASCRIPT)
For Play.js and play.html
Modified the HTML to change the chatbox since it didn't do anything but look like a chat box. Created a way to open and close the chat for the user and allowed the user's to send messages. So far it only displays the message very similar to an error message but will work on making it more user friendly and possibly fun to use. Made the user's be able to write their own names by linking a google spreadsheet that ties with the options of names or players you can take. Created a way to determine who the winner is. Just has to equal the amount of wins of whoever gets to that limit.
There are still some problems like adding the names of the players into the local storage and saving it into the scoring page. That is the only problem with this page for now, but will get it fixed hopefully soon.

(REQUIRED STARTUP SERVICES)
This deliverable demonstrates converting the JavaScript application into a web application by implementing a web service that listens on a network port for HTTP requests.
Able to receive request by using both app and requests. Using Bcrypt to have more security with logging in. You get the requests from the user based on the password and username of the user, but it is saved the first time. if you try using a different one, it should not work, because of the ability to save and bcrypt in the index.js file for reading the logins of the user. Many other notes are made on the index.js code itself and the normal or simon code is commented on the bottom and was used as referenced. Added a way to connect in the login.js that will get the fetch requests/

(REQUIRED START UP DB)
.gitignore to prevent information from getting leaked. Added a database.js file, and a Dbconfig.json file that contains the info needed to connect and get the cluster. So the database was created based off of the code that made from the assignment, unfortunately i do not know exactly what kind of data i want in my database besides login info, so i'm waiting to see if that's what I need to put in my database and keep the userinfo a secret. Once that is resolved i'll know how and what to keep secret in the .gitignore file. 

(REQUIRED Login)
added bcrypt to hash passwords for the users to login and each new pass word or user should get a new token key based on how cookie-parser works. New file changes to index and database are created. As well as a new installation of mongoose. There is something strange going on in my node_modules. There is 3 files that are balneked out that are important. fix soon.

(REQUIRED WEBSOCKET)
2 new files created, 1 inside the public called chatClient.js and the other is websocket.js. The file inside, chatClient.js, it creates a new websocket insstance connecting to the same host as the current webpage.When the websocket is created, or known, it displays a message in the console saying it is connected. I have created a new message chat for players to chat while the tournament is going. as well i am having  some weird errors regarding fetch not work for my googlesheet document because Google or CORS changed something. Unfortunately my websocket is disconnected at this point and time, i have no idea why. Its definitely has to deal with my index.js and websocket file. I believe it has to deal with something on line 3 dealing with my websocket object. The main problem is the URL itself. I have no idea how to fix it. The problem is on line 3 of chatClient.js when creating the websocket object. It should return the websocket url, but it can't find it. "const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);" Hopefully i'll get this fixed soon. 
