if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyCt-FqpYZ3fnlwBsZ5cT-3Z-G1X_l2C4Uw",
  "databaseURL": "https://customerwebsite-a06f8.firebaseio.com",
  "storageBucket": "customerwebsite-a06f8.appspot.com",
  "authDomain": "customerwebsite-a06f8.firebaseapp.com",
  "messagingSenderId": "994980680828",
  "projectId": "customerwebsite-a06f8"
});