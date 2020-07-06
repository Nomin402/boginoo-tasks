import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAmiJZnf4nf7SVoXj2kuEpR3453thF8ksk",
    authDomain: "boginoo-402.firebaseapp.com",
    databaseURL: "https://boginoo-402.firebaseio.com",
    projectId: "boginoo-402",
    storageBucket: "boginoo-402.appspot.com",
    messagingSenderId: "502717388325",
    appId: "1:502717388325:web:db9ed7a85ea436cdbf51cc",
    measurementId: "G-Q21J567PH7"
};

const app = firebase.initializeApp(config)

export default app;