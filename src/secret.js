import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAmMY9OHtb93iR5pjzQ1ZWVYR016esaz-E",
  authDomain: "tejus-dev.firebaseapp.com",
  databaseURL: "https://tejus-dev.firebaseio.com",
  storageBucket: "tejus-dev.appspot.com"
};
firebase.initializeApp(config);

export default firebase.database().ref('/').once('value').then(function(snapshot) {
  return snapshot.val()
});
