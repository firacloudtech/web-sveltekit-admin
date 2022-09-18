import { getTodos } from '$lib/api/todo.api';
import { auth } from '$lib/firebase';

export const load = async () => {
	const todos = await getTodos(auth.currentUser?.uid || '');

	return {
		todos
	};
};
