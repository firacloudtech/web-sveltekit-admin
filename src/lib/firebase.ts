import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBwbwBcgpDkkOe6T3pJ4TZnxFt8I2c3PzE',
	authDomain: 'osca-demo.firebaseapp.com',
	databaseURL: 'https://osca-demo.firebaseio.com',
	projectId: 'osca-demo',
	storageBucket: 'osca-demo.appspot.com',
	messagingSenderId: '162390143557',
	appId: '1:162390143557:web:4eff9a8437a50b63',
	measurementId: 'G-DBDD2RGD46'
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
}
