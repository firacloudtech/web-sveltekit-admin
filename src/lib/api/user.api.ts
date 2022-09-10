import { doc, setDoc } from 'firebase/firestore/lite';
import type { LoginDataType, RegisterDataType } from '$lib/utils/types/auth.type';
import { COLLECTIONS } from '$lib/utils/types/collections.type';
import { auth, db } from '$lib/firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile
} from 'firebase/auth';
import { goto } from '$app/navigation';

export const userDoc = (userId: string) => doc(db, COLLECTIONS.USERS, userId);

export async function signUp(event: CustomEvent<RegisterDataType>) {
	try {
		let user = await createUserWithEmailAndPassword(
			auth,
			event.detail.email,
			event.detail.password
		);
		await updateProfile(user.user, { displayName: event.detail.displayName });
	} catch (error) {
		console.error('error from creating user', error);
	}
}

export async function signIn(event: CustomEvent<LoginDataType>) {
	try {
		let user = await signInWithEmailAndPassword(auth, event.detail.email, event.detail.password);
		await setDoc(userDoc(auth.currentUser?.uid || ''), {
			username: user.user.displayName,
			email: user.user.email
		});
		await goto('/' + COLLECTIONS.BLOGS);
	} catch (error) {
		console.error('error signin in', error);
	}
}
