import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hummus-pet-store.firebaseapp.com",
  projectId: "hummus-pet-store",
  storageBucket: "hummus-pet-store.appspot.com",
  messagingSenderId: "196619665312",
  appId: "1:196619665312:web:9cb7d30d01c2a16feaaec5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
