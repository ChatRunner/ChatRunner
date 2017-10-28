import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB5ipDHaK_CD6pfgp6FZrOR9pXyqocM2Zw",
    authDomain: "chatrunner-4974b.firebaseapp.com",
    databaseURL: "https://chatrunner-4974b.firebaseio.com",
    projectId: "chatrunner-4974b",
    storageBucket: "chatrunner-4974b.appspot.com",
    messagingSenderId: "999977696366"
};
export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace

export const storageKey = 'FIREBASE_AUTH_KEY';

export const isAuthenticated = () => {
    return !!auth.currentUser || !!localStorage.getItem(storageKey);
}