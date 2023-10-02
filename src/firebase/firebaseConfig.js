
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLn2EwjZghzxlR_UGwpspPNNZ6fj41cfU",
  authDomain: "dragone-news-project.firebaseapp.com",
  projectId: "dragone-news-project",
  storageBucket: "dragone-news-project.appspot.com",
  messagingSenderId: "781080875491",
  appId: "1:781080875491:web:85d8cdbc4df22092ef10d6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)