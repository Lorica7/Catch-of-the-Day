import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDl7tPhlzCSV3Zy0_Pv5Wbw8eVdbYKg-K0",
    authDomain: "catch-of-the-day-bbdd2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-bbdd2-default-rtdb.firebaseio.com",


})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;