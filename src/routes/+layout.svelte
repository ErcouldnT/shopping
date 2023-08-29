<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

	// Stylesheets
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import 'iconify-icon';

	import type { ComponentEvents } from 'svelte';

	// Skeleton Features
	import { AppShell, AppBar, type PopupSettings } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'bottom',
		closeQuery: 'a[href]'
	};

	// Local Features
	import project from '../settings/project';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Banner from '$lib/Banner/Banner.svelte';
	import Footer from '$lib/Footer/Footer.svelte';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		// console.log(event.currentTarget.scrollTop);
	}

	function drawerOpen(): void {
		// drawerStore.open({});
	}

	function login(): void {
		goto('/login');
	}

	async function signOut() {
		const { error } = await supabase.auth.signOut();
	}
</script>

<svelte:head>
	<title>{project.name}</title>
</svelte:head>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<AppShell
	regionPage="relative"
	slotPageHeader="sticky top-0 z-10 opacity-95"
	slotSidebarLeft="w-0 lg:w-64"
	slotSidebarRight="w-0 lg:w-64"
	on:scroll={scrollHandler}
>
	<!-- (header) -->
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">
		<Banner />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<button on:click={drawerOpen} class="lg:hidden btn btn-sm">
					<iconify-icon icon="ic:round-menu" width="24" />
				</button>
			</svelte:fragment>
			<a href="/">{project.name}</a>
			<svelte:fragment slot="trail">
				<a href="/sepet">
					<iconify-icon icon="mdi:cart-outline" width="24" />
				</a>
				{#if data.session}
					<a href="/fav">
						<iconify-icon icon="mdi:cards-heart" width="24" />
					</a>
					<button use:popup={popupClick}>
						<iconify-icon icon="mdi:account-circle" width="24" />
					</button>
				{:else}
					<button on:click={login} class="btn btn-sm variant-filled-tertiary">Giriş</button>
					<!-- <LightSwitch /> -->
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="p-2">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
	<!-- (footer) -->

	<div class="card p-1" data-popup="popupClick">
		<nav class="list-nav p-4">
			<ul>
				<!-- <li><a>Merhaba, Erkut</a></li> -->
				<li>
					<a class="flex justify-between">
						<p>Gece modu</p>
						<LightSwitch />
					</a>
				</li>
				<li><a href="/bilgiler">Kullanıcı bilgilerim</a></li>
				<li><a href="/mesajlar">Mesajlar</a></li>
				<li><a href="/admin">Yönetim</a></li>
				<li><a href="/ilanver">İlan ver</a></li>
				<li><a href="/ilanlar">İlanlarım</a></li>
				<!-- <li><a href="/">Siparişlerim</a></li> -->
				<li><a href="/fav">Favori ürünlerim</a></li>
				<li><a href="/" on:click={signOut}>Çıkış yap</a></li>
			</ul>
		</nav>
		<!-- <div class="arrow variant-filled-primary" /> -->
	</div>
</AppShell>
