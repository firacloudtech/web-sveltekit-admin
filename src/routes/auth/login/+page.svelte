<script lang="ts">
	import { signIn } from '$lib/api/user.api';
	import Login from '$lib/components/auth/login.svelte';
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
		<Login on:signIn={signIn} />
	</div>
</div>
