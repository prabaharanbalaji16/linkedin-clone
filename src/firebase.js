import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBt8LYLfc4ZiQ1jEZOMRvoim_h9VFOWjPY",
    authDomain: "linkedin-clone-10e70.firebaseapp.com",
    projectId: "linkedin-clone-10e70",
    storageBucket: "linkedin-clone-10e70.appspot.com",
    messagingSenderId: "651987734657",
    appId: "1:651987734657:web:cf5d717a3e3c14e5f0fd80"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {db,auth};