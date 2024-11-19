
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9dy1F39qVUOFtvc4Of1ZLKckwck7Zyss",
  authDomain: "https://console.firebase.google.com/project/casasbogota-2a61d/database/casasbogota-2a61d-default-rtdb/data/~2F",
  projectId: "casasbogota-2a61d",
  storageBucket: "922891554048",
  messagingSenderId: "922891554048",
  appId: "922891554048"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
