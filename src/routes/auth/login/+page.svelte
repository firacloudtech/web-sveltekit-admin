<script lang="ts">
	import { goto } from '$app/navigation';
	import Login from '$lib/components/auth/login.svelte';
	import { signIn } from '$lib/data/user.api';
	import type { LoginDataType } from '$lib/utils/types/auth.type';
	import { ROUTES } from '$lib/utils/types/routes.type';

	let error: any;

	async function handleLogin(event: CustomEvent<LoginDataType>) {
		try {
			const user = await signIn(event);

			if (user?.user) {
				goto(ROUTES.BLOGS);
			}
			error = user;
		} catch (error) {
			if (error instanceof Error) {
				error = error.message;
			}
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
