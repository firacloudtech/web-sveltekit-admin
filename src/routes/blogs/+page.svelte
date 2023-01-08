<script lang="ts">
	import { getTodos } from '$lib/data/todo.api';
	import { auth } from '$lib/firebase';
	import type { Todo } from '$lib/utils/types/collections.type';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let todos: Todo[] = data.todos;

	async function getDocs() {
		todos = await getTodos();
	}
</script>

<div class="font-bold">Blogs</div>

{#if todos.length > 0}
	{#each todos as todo}
		<p>{JSON.stringify(todo)}</p>
	{/each}
	<!-- content here -->
{:else}
	<div>No blogs found</div>
{/if}

<button class="btn btn-primary" on:click={getDocs}>Get Todos</button>
