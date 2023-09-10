<script lang="ts">
	import _ from 'lodash';
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

	let filteredProducts: {
		category: string;
		colors: string[];
		created_at: string;
		id: number;
		price: number;
		product_desc: string;
		product_name: string;
		seller_id: string;
		slug: string;
	}[] = [];

	const getAllProducts = async () => {
		const products = await supabase.from('products').select();
		allProducts = [...[products.data]];

		filteredProducts = _.orderBy(allProducts[0], ['created_at'], ['desc']);
	};

	getAllProducts();
</script>

<main class="grid md:grid-cols-3 grid-cols-1 gap-5">
	{#each filteredProducts as ad}
		<Product {ad} {supabase} />
	{/each}
</main>
