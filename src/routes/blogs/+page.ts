import { getTodos } from '$lib/data/todo.api';
import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		todos: await getTodos()
	};
}) satisfies PageLoad;
