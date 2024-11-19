
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "922891554048",
  authDomain: "922891554048",
  projectId: "casasbogota-2a61d",
  storageBucket: "922891554048",
  messagingSenderId: "922891554048",
  appId: "922891554048"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
