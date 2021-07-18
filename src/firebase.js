import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyANAB-i033dhb1rfkBi_aAzZiJHXDJkmmk",
    authDomain: "entertainment-yard.firebaseapp.com",
    projectId: "entertainment-yard",
    storageBucket: "entertainment-yard.appspot.com",
    messagingSenderId: "102781471241",
    appId: "1:102781471241:web:0b03ba77e4c5699b8086d8"
  };

  firebase.initializeApp(firebaseConfig)

export default firebase.auth()