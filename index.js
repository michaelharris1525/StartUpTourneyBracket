/////////////////////////////////////////////////////////////////////////////////////////////////////
//pull in the express library
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
//going to get the app for express
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// the service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;

//allow the app the accept json
app.use(express.json());

//tracking authentication
app.use(cookieParser());

//Serve up the applications static content
app.use(express.static('public'));

//Trust headers taht are forwarded to know IP Adresses
app.set('trust proxy', true);

//Router for Service Endpoints
var apiRouter = express.Router();
app.use('/api', apiRouter);

//createAuth Token for a new User
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});
// GetScores
secureApiRouter.get('/scores', async (req, res) => {
  const scores = await DB.getHighScores();
  res.send(scores);
});

// SubmitScore
secureApiRouter.post('/score', async (req, res) => {
  const score = { ...req.body, ip: req.ip };
  await DB.addScore(score);
  const scores = await DB.getHighScores();
  res.send(scores);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// const users = [];

// //creating a route to get all the users. Don't want people to see user information so bycrpyt is needed
// app.get('/users', (req, res) => {
//   res.json(users)
// })

// // // Router for service endpoints
// // var apiRouter = express.Router();
// app.use(`/api`, apiRouter);

// //way to create users
// app.post('/users', async (req, res) => {
//   try {
//     //this generates a salt or basically if the user uses the same password as another user, its changed slightly at the end
//     //making it harder for people to get in and try stealing information
//     // const salt = await bcrypt.genSalt()
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     // console.log(hashedPassword)
//     // const user = { name: req.body.name, password: req.body.password }
//     //bcrypt used to hash the password
//     const user = { name: req.body.name, password: hashedPassword }
//     users.push(user)
//     //201 = request was successfully fulfilled
//     res.status(201).send()
//     // hash(salt + 'password') //can't break people's passwords because of the salt.
//   } catch {
//     //500 error response
//     res.status(500).send()
//   }
// })

// //users/login to compare the login and the saved login from the first time you logged in as a user
// app.post('/users/login', async (req, res) => {
//   const user = users.find(user => user.name === req.body.name)
//   if (user == null) {
//     return res.status(400).send('Cannot find user')
//   }
//   try {
//     //if these are the same comparing the user login and the saved info
//     if(await bcrypt.compare(req.body.password, user.password)) {
//       res.send('Success')
//     } else {
//       //password or user not the same
//       res.send('Not Allowed')
//     }
//   } catch {
//     res.status(500).send()
//   }
// })

// // Return the application's default page if the path is unknown
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// // GetScores
// apiRouter.get('/scores', async (_req, res) => {
//   const scores = await DB.getHighScores();
//   res.send(scores);
// });

// // SubmitScore
// apiRouter.post('/score', async (req, res) => {
//   DB.addScore(req.body);
//   const scores = await DB.getHighScores();
//   res.send(scores);
// });
















// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
// let scores = [];
// function updateScores(newScore, scores) {
//   let found = false;
//   for (const [i, prevScore] of scores.entries()) {
//     if (newScore.score > prevScore.score) {
//       scores.splice(i, 0, newScore);
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     scores.push(newScore);
//   }

//   if (scores.length > 10) {
//     scores.length = 10;
//   }

//   return scores;
// }

// app.listen(3000)











// const express = require('express');
// const app = express();

// // The service port. In production the front-end code is statically hosted by the service on the same port.
// const port = process.argv.length > 2 ? process.argv[2] : 3000;

// // JSON body parsing using built-in middleware
// app.use(express.json());

// // Serve up the front-end static content hosting
// app.use(express.static('public'));

// // Router for service endpoints
// var apiRouter = express.Router();
// app.use(`/api`, apiRouter);

// // GetScores
// apiRouter.get('/scores', (_req, res) => {
//   res.send(scores);
// });

// // SubmitScore
// apiRouter.post('/score', (req, res) => {
//   scores = updateScores(req.body, scores);
//   res.send(scores);
// });

// // Return the application's default page if the path is unknown
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// // updateScores considers a new score for inclusion in the high scores.
// // The high scores are saved in memory and disappear whenever the service is restarted.
// let scores = [];
// function updateScores(newScore, scores) {
//   let found = false;
//   for (const [i, prevScore] of scores.entries()) {
//     if (newScore.score > prevScore.score) {
//       scores.splice(i, 0, newScore);
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     scores.push(newScore);
//   }

//   if (scores.length > 10) {
//     scores.length = 10;
//   }

//   return scores;
// }
