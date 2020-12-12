import React from 'react';
import NavigationBar from './Components/Navbar/index.js';
import Info from './pages/info.js';
import firebase from "firebase/app";


export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAKJvL92P2jsrYNpzhXGcbyI--jxci8xb8",
    authDomain: "cov-alert.firebaseapp.com",
    databaseURL: "https://cov-alert-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cov-alert",
    storageBucket: "cov-alert.appspot.com",
    messagingSenderId: "1000415312172",
    appId: "1:1000415312172:web:11fb3184b55c1ab6871489"
  };

  firebase.initializeApp(firebaseConfig);

  return (
    <div>
      <NavigationBar/>
      <Info/>
    </div>
  );
}