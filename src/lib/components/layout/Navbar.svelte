<script>
	import { ROUTES } from '$lib/utils/types/routes.type';
</script>

<nav class="navbar bg-blue-600 text-white">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">SvelteKit</a>
	</div>
	<div class="flex-1">
		<ul class="flex space-x-2">
			<li>
				<a href={ROUTES.LOGIN}>Login</a>
			</li>
			<li>
				<a href={ROUTES.REGISTER}>Sign Up</a>
			</li>
		</ul>
	</div>

	<div class="flex-none">
		<div class="flex space-x-2 mr-4">
			<button data-set-theme="light" data-act-class="ACTIVECLASS"> Light</button>
			<button data-set-theme="dark" data-act-class="ACTIVECLASS">Dark</button>
			<button data-set-theme="corporate" data-act-class="ACTIVECLASS">Corporate</button>
		</div>

		<div class="dropdown dropdown-end">
			<span tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="https://placeimg.com/80/80/people" alt="avatar" />
				</div>
			</span>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-gray-500 rounded-box w-52"
			>
				<li><a href="/">Settings</a></li>
				<li><a href="/">Logout</a></li>
			</ul>
		</div>
	</div>
</nav>
