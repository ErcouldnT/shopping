<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import slugify from 'slugify';
	import { onMount } from 'svelte';

	import Product from '$lib/Product.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let allProducts: (
		| {
				category: string;
				colors: string[];
				created_at: string;
				id: number;
				price: number;
				product_desc: string;
				product_name: string;
				seller_id: string;
				slug: string;
		  }[]
		| null
	)[] = [];

	const getAllProducts = async () => {
		const products = await supabase.from('products').select();
		allProducts = [...[products.data]];
	};

	getAllProducts();
</script>

<main class="grid md:grid-cols-3 grid-cols-1 gap-5">
	{#each allProducts[0] || [] as ad}
		<Product {ad} {supabase} />
	{/each}
</main>
