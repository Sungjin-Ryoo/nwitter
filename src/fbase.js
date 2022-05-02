// "firebase/app"에 포함된 모든 모듈을 firebase라는 객체에 부여한다는 뜻
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// firebase 객체에서 initializeApp 함수를 꺼내 사용\
// initializeApp 함수에는 firebaseConfig를 담아 전달
firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// export const authService = getAuth();

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();