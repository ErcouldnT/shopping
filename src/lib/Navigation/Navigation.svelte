<script lang="ts">
	import navigation from '../../settings/navigation';
	import slugify from '../../utils/slugify';
	// import { getDrawerStore } from '@skeletonlabs/skeleton';

	// const drawerStore = getDrawerStore();

	function drawerClose(): void {
		// drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/">Tüm ürünler</a></li>
		{#each navigation as category}
			<li>
				<a data-sveltekit-preload-data="off" href="/{slugify(category)}" on:click={drawerClose}
					>{category}</a
				>
			</li>
		{/each}
	</ul>
</nav>
