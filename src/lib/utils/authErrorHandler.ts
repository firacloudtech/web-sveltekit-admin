import { AuthErrorMessage } from '$lib/utils/conts';
import type { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from 'firebase/auth';

export function authErrorHandler(error: FirebaseError) {
	switch (error.code) {
		case AuthErrorCodes.INVALID_EMAIL:
			error.message = AuthErrorMessage.INVALID_EMAIL;
			break;
		case AuthErrorCodes.INVALID_PASSWORD:
			error.message = AuthErrorMessage.INVALID_PASSWORD;
			break;
	}
}
