import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBvyuKinP-OBhVLfR8cs0cQZhQ4X7mR4sE',
	authDomain: 'netflix-clone-1081a.firebaseapp.com',
	projectId: 'netflix-clone-1081a',
	storageBucket: 'netflix-clone-1081a.appspot.com',
	messagingSenderId: '512504156877',
	appId: '1:512504156877:web:1371b7aceb7df8d2494f84',
	measurementId: 'G-CLKBMC2T59',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
