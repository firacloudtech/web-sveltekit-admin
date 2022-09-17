<script lang="ts">
	import { goto } from '$app/navigation';
	import { signIn } from '$lib/api/user.api';
	import Login from '$lib/components/auth/login.svelte';
	import type { LoginDataType } from '$lib/utils/types/auth.type';
	import { ROUTES } from '$lib/utils/types/routes.type';
	import type { UserCredential } from 'firebase/auth';

	let error: any;

	async function handleLogin(event: CustomEvent<LoginDataType>) {
		try {
			const user: UserCredential | unknown = await signIn(event);

			if (user?.user) {
				goto(ROUTES.BLOGS);
			}
			error = user;
		} catch (error) {
			error = error?.message;
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse w-full lg:space-x-4">
		<div class="text-center lg:w-1/2 w-full">
			<h1 class="text-5xl font-bold">Login now!</h1>
			<p class="py-6">Login text</p>
		</div>

		<Login on:signIn={handleLogin} {error} />
	</div>
</div>
