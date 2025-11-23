importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyD5wGV27bLLhGvncsEHCAJESnoGLYBTUhE",
  authDomain: "edubest-a9dee.firebaseapp.com",
  projectId: "edubest-a9dee",
  storageBucket: "edubest-a9dee.appspot.com", // <-- fix this: "firebasestorage.app" is wrong
  messagingSenderId: "76598492826",
  appId: "1:76598492826:web:ec10a0acd1cb8496386923",
  measurementId: "G-LJWCTRFBPT"
});

const messaging = firebase.messaging();

// Optional: handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
