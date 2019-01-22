import firebase from 'firebase/app'
import 'firebase/database'

  const config = {
    apiKey: "AIzaSyCYrwbFl0l4kmzZz6lsHuRjSrb7cLCInac",
    authDomain: "comments-reactdev.firebaseapp.com",
    databaseURL: "https://comments-reactdev.firebaseio.com",
    projectId: "comments-reactdev",
    storageBucket: "comments-reactdev.appspot.com",
    messagingSenderId: "128328740317"
  }
  firebase.initializeApp(config)

export const database = firebase.database()