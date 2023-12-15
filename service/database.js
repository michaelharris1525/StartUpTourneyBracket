const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('simon');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  async function getUserByToken(token) {
    const user = await scoreCollection.findOne({ token: token });
    return user;
  }

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  async function addScore(score) {
    const result = await scoreCollection.insertOne(score);
    return result;
  }
  
  function getHighScores() {
    const query = { score: { $gt: 0, $lt: 900 } };
    const options = {
      sort: { score: -1 },
      limit: 10,
    };
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray();

  }
  
  module.exports = { addScore, getHighScores, getUserByToken };
  // Insert login
  const house = {
    name: 'username',
    summary: 'password',
    property_type: 'signup',
    number: 1,
  };
//   await collection.insertOne(house);

//   // Query the documents
//   const query = { property_type: 'signup', number: { $lt: 2 } };
//   const options = {
//     sort: { house: -1 },
//     limit: 10,
//   };

//   const cursor = collection.find(query, options);
//   const rentals = await cursor.toArray();
//   rentals.forEach((i) => console.log(i));
}
main().catch(console.error);