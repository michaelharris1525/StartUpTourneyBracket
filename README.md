# StartYourOwnTourneyBracket
## Pitch
Have you ever wanted to see who is the best at something in your friend group? Whether it be a beta male game like playing chess or playing a full on 1 v 1 tournament playing smash brothers or basketball or something of the sort. And you wanted a cool way to be able to do it at the spot. Wouldn’t it be cool to have some sort of **website** to automatically do that for you while giving the participants options to **vote** on which of the players would win beforehand and **keep track** of the scores of each games per participant. That would be epic! @MichaelHarris1525CS260 :+1:

## Description and Design
The first part about the website will ask you for your username and password. You'll need to sign up in order to be able to register for a tournament or create a tournament. This is where the technology of authentication comes to play.
The second Part will be allowing players to put in the score of their matches when they play. They'll be able to enter the score of the match and end it. This is how Database Data will be used. That each of the players scrores will be recorded
The last part will be betting. Since we need a websocket of a live count of players. The players playing in the tournament or are just freelancing (just watching) can vote on who will win the tournament. Once you vote, you can't change your vote. The name of the most voted player to win will pop up at the bottom of the bracket with the phrase "most likely to win based on public opinion (gamertag)/(name of player)". This will be the last set of technology coming into play.
![Screenshot 2023-09-22 210919](https://github.com/michaelharris1525/StartUpTourneyBracket/assets/144944137/96169fe7-ee27-461b-a7fa-2e38bcd6ed20) 
![Screenshot 2023-09-22 210902](https://github.com/michaelharris1525/StartUpTourneyBracket/assets/144944137/77f2173f-80c8-44c8-8f63-d8d95000271a) 

## Technologies
HTML - Uses correct HTML structure for application. Two HTML pages. One for login and one for voting. Hyperlinks to choice artifact.
CSS - Used to Design the website
JavaScript - Provides login, choice display, applying votes, display other users votes
Service - Backend service with endpoints for: login and submitting or counting votes
DB - Store the scores of the game based on User
Login - Register and login users. Need a profile to use website
WebSocket - As each user votes, the highest vote will show the most likely player to win based on opinion
React - Application ported to use the React web. 
