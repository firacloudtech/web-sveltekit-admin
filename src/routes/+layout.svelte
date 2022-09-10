<script>
	import Navbar from '../lib/components/layout/Navbar.svelte';

	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth } from '../lib/firebase';
	import { getStores } from '$app/stores';
	import { goto } from '$app/navigation';
	import { ROUTES } from '$lib/utils/types/routes.type';
	export const csr = false;
	export const prerender = true;

	onMount(() => {
		themeChange(false);
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				goto(ROUTES.LOGIN);
			}
		});
	});
</script>

<Navbar />
<slot />
