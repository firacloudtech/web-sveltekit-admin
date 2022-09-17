<script>
	import Navbar from '../lib/components/layout/Navbar.svelte';

	import { goto } from '$app/navigation';
	import { ROUTES } from '$lib/utils/types/routes.type';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.css';
	import { auth } from '../lib/firebase';
	export const csr = false;
	export const prerender = true;

	onMount(() => {
		themeChange(false);
		onAuthStateChanged(auth, (user) => {
			if (user) {
				goto(ROUTES.BLOGS);
			} else {
				goto(ROUTES.LOGIN);
			}
		});
	});
</script>

<Navbar />
<slot />
