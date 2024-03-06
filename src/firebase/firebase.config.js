
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWIT-dYlmdgteglqd3TIgxKfcJKWG9S7U",
  authDomain: "fir-recap-2e534.firebaseapp.com",
  projectId: "fir-recap-2e534",
  storageBucket: "fir-recap-2e534.appspot.com",
  messagingSenderId: "497747124762",
  appId: "1:497747124762:web:242ca9c2f5546c1912a7a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;