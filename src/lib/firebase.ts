
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF1zW7sM-Nf_wb3gmYB88S8UZENDthQko",
  authDomain: "e-commerse-demo-a1cfc.firebaseapp.com",
  projectId: "e-commerse-demo-a1cfc",
  storageBucket: "e-commerse-demo-a1cfc.firebasestorage.app",
  messagingSenderId: "265410668237",
  appId: "1:265410668237:web:9a9400da3fb802ad00eb84"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
