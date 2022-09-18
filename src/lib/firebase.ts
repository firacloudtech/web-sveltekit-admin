import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASEURL,
	projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_FIREBASE_APPID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const realtimeDB = getDatabase();
export const functions = getFunctions();
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

// connect to emulator if in dev
if (import.meta.env.MODE !== 'production') {
	connectFirestoreEmulator(db, 'localhost', 5020);
	connectFunctionsEmulator(functions, 'localhost', 5001);
	connectDatabaseEmulator(realtimeDB, 'localhost', 9000);
	connectFirestoreEmulator(db, 'localhost', 8080);
}
