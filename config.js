 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDK3ykqbd1uw8ZJ2b1igeVmvDotL7X1QVU",
  authDomain: "attendanceapp-e8f39.firebaseapp.com",
  databaseURL: "https://attendanceapp-e8f39-default-rtdb.firebaseio.com",
  projectId: "attendanceapp-e8f39",
  storageBucket: "attendanceapp-e8f39.appspot.com",
  messagingSenderId: "199878786076",
  appId: "1:199878786076:web:f149813dbee2bcb46bf3d9"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  