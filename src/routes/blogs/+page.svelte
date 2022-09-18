<script lang="ts">
	import { getTodos } from '$lib/api/todo.api';
	import { auth } from '$lib/firebase';
	import type { Todo } from '$lib/utils/types/collections.type';

	export let data;
	let todos: Todo[] = data.todos;

	console.log('TODOS', data.todos);

	async function getDocs() {
		todos = await getTodos(auth.currentUser?.uid || '');
		console.log('TODOS', todos);
	}
</script>

<div class="font-bold">Blogs</div>

{#each todos as todo}
	<p>{JSON.stringify(todo)}</p>
{/each}
<button class="btn btn-primary" on:click={getDocs}>Get Todos</button>
