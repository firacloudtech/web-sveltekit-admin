import type { User, UserInfo } from 'firebase/auth';
import { writable } from 'svelte/store';

const authStore = writable<{
	isLoggedIn: boolean;
	user?: User | null;
	firebaseControlled: boolean;
}>({
	isLoggedIn: false,
	firebaseControlled: false
});

export default {
	subscribe: authStore.subscribe,
	set: authStore.set
};
