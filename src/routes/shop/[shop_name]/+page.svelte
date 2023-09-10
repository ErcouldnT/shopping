<script lang="ts">
	export let data;

	const seller = data.seller;
</script>

<div class="container p-5 flex flex-col justify-center items-center gap-5">
	<h1>{seller.shop_name}</h1>
	<a
		href="/mesajlar/{seller.slug}"
		class="btn variant-filled-primary"
		data-sveltekit-preload-data="hover">Satıcıya mesaj gönder</a
	>
</div>
