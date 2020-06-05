var admin = require("firebase-admin");
var serviceAccount = require('../socialmedia-187ef-77551460ec3d.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://socialmedia-187ef.firebaseio.com",
    storageBucket: "socialmedia-187ef.appspot.com",
  });

  const db = admin.firestore();

  module.exports = { admin, db };