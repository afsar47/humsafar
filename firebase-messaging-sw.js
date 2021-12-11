importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
   apiKey: "AIzaSyAe7kZxn79nH9_HexgQiomz3inG7nUwG4s",
    authDomain: "hamsafar-c32d5.firebaseapp.com",
    projectId: "hamsafar-c32d5",
    storageBucket: "hamsafar-c32d5.appspot.com",
    messagingSenderId: "697473299431",
    appId: "1:697473299431:web:a6d0c544beda41adc3c342",
    measurementId: "G-F0KPHSFVP3"
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});