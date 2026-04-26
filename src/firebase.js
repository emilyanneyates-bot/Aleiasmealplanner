import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjUQVnT6wh4e_JjiaMehBGTAGDUREJ3io",
  authDomain: "aleia-78dc4.firebaseapp.com",
  projectId: "aleia-78dc4",
  storageBucket: "aleia-78dc4.firebasestorage.app",
  messagingSenderId: "493497515518",
  appId: "1:493497515518:web:8c8f128d9ab51b06b354af"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
