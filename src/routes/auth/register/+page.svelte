<script lang="ts">
	import { signUp } from '$lib/api/user.api';
	import Register from '$lib/components/auth/register.svelte';
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse w-full lg:space-x-2">
		<div class="text-center lg:w-1/2 w-full">
			<h1 class="text-5xl font-bold">Register now!</h1>
			<p class="py-6">Register text</p>
		</div>
		<Register on:signUp={signUp} />
	</div>
</div>
