import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARoGjpwTvBhO4a0144Nj1t8gbyFigKc8g",
  authDomain: "profesional-3dfc8.firebaseapp.com",
  databaseURL: "https://profesional-3dfc8-default-rtdb.firebaseio.com",
  projectId: "profesional-3dfc8",
  storageBucket: "profesional-3dfc8.appspot.com",
  messagingSenderId: "221504788624",
  appId: "1:221504788624:web:1b48af5bde730694722015",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
