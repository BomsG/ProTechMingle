import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_LqzT4_qL3GXlknmpd0ICfdx5RPpa5O0",
  authDomain: "protechmingle-3b18e.firebaseapp.com",
  projectId: "protechmingle-3b18e",
  storageBucket: "protechmingle-3b18e.appspot.com",
  messagingSenderId: "270618447601",
  appId: "1:270618447601:web:29897c96404baf9f636350",
  measurementId: "G-QXT1VRLR13",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
