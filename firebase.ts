import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDgFf_SWavxSks3DqPuNbZLXJ2RcqkEkYQ',
  authDomain: 'words-tt.firebaseapp.com',
  projectId: 'words-tt',
  storageBucket: 'words-tt.appspot.com',
  messagingSenderId: '964555550619',
  appId: '1:964555550619:web:790d9819ae22f71126fb3e'
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
