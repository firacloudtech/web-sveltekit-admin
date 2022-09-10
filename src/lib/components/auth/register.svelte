<script lang="ts">
	import type { RegisterDataType } from '$lib/utils/types/auth.type';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	let data: RegisterDataType = {
		email: '',
		password: ''
	};

	function signUp() {
		dispatch('signUp', data);
	}
</script>

<div class="card flex-shrink-0 lg:w-1/2 w-full shadow-2xl bg-base-100">
	<form class="card-body">
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
			<div class="label mx-auto">
				Already have an account? <a href="/forgot-password" class="link link-primary font-bold ml-2"
					>Sign In</a
				>
			</div>
		</div>
		<div class="form-control mt-2">
			<button class="btn btn-primary" on:submit={signUp}>Register</button>
		</div>
	</form>
</div>
