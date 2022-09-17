<script lang="ts">
	import type { LoginDataType } from '$lib/utils/types/auth.type';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	let data: LoginDataType = { email: '', password: '' };
	export let error = '';

	function signIn() {
		dispatch('signIn', data);
	}
</script>

<div class="card flex-shrink-0 lg:w-1/2 w-full shadow-2xl bg-base-100">
	<form class="card-body" on:submit|preventDefault={signIn}>
		<div class="form-control lg:text-left">
			<label class="label flex flex-col items-start">
				<span class="label-text ">Email</span>
				<input
					bind:value={data.email}
					type="text"
					placeholder="email"
					name="email"
					class="input input-bordered w-full"
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label flex-col items-start">
				<span class="label-text">Password</span>
				<input
					bind:value={data.password}
					type="text"
					placeholder="password"
					name="password"
					class="input input-bordered w-full"
				/>
			</label>
			<span class="label mx-auto">
				<a href="/forgot-password" class="label-text-alt link link-hover">Forgot password?</a>
			</span>
			{#if error != ''}
				<div class="text-red-500 mx-auto">
					<p>{error}</p>
				</div>
			{/if}
		</div>
		<div class="form-control mt-2">
			<button class="btn btn-primary">Login</button>
		</div>
	</form>
</div>
