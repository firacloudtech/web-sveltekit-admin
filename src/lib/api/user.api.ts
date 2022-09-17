import { auth, db } from '$lib/firebase';
import { authErrorHandler } from '$lib/utils/authErrorHandler';
import type { LoginDataType, RegisterDataType } from '$lib/utils/types/auth.type';
import { COLLECTIONS } from '$lib/utils/types/collections.type';
import { FirebaseError } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	type UserCredential
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore/lite';

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

export async function signIn(event: CustomEvent<LoginDataType>): Promise<UserCredential | unknown> {
	try {
		let user = await signInWithEmailAndPassword(auth, event.detail.email, event.detail.password);

		await setDoc(doc(db, 'users', user.user.uid), {
			email: user.user.email
		});

		return user;
	} catch (error: unknown) {
		console.log(error);
		if (error instanceof FirebaseError) {
			authErrorHandler(error);
		}
		return error;
	}
}

export async function logOut() {
	try {
		await signOut(auth);
		return true;
	} catch (error) {
		return error;
	}
}
