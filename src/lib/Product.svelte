<script lang="ts">
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { Avatar } from '@skeletonlabs/skeleton';
	import slugify from '../utils/slugify';

	export let supabase: SupabaseClient;
	export let ad: {
		category: string;
		colors: string[];
		created_at: string;
		id: number;
		price: number;
		product_desc: string;
		product_name: string;
		seller_id: string;
		slug: string;
	};

	let seller: {
		created_at: string;
		id: number;
		seller_id: string;
		shop_name: string;
		slug: string;
	} | null;

	const getSellerInfo = async () => {
		const { data, error } = await supabase.from('sellers').select().eq('seller_id', ad.seller_id);
		seller = data && data[0];
	};

	getSellerInfo();

	// href="/{slugify(ad.category.toLowerCase())}/{ad.slug}"
</script>

<a class="card card-hover overflow-hidden" href="/shop/{slugify(seller?.slug || '')}">
	<header>
		<img
			src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkingdoodle.com%2Fwp-content%2Fuploads%2F2019%2F11%2FBlack_Printo.jpg&f=1&nofb=1&ipt=c33f5b0b18fe26eaf32021117759fb08d901aba563b05e614dd18a34440c90e2&ipo=images"
			class="bg-black/50 w-full aspect-[9/9]"
			alt="Ozan"
		/>
	</header>
	<div class="p-4 space-y-4">
		<h6 class="h6" data-toc-ignore>{ad.product_name}</h6>
		<h3 class="h3" data-toc-ignore>{ad.price}₺</h3>
		<article>
			<p>
				{ad.product_desc}
			</p>
		</article>
	</div>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-start items-center space-x-4">
		<Avatar
			src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestprofilepictures.com%2Fwp-content%2Fuploads%2F2021%2F04%2FCool-Profile-Picture-986x1024.jpg&f=1&nofb=1&ipt=32ddcc851ad488d6457bc0a2f9f077dc35af585e54cd309a63b1a4ebe0985a94&ipo=images"
			width="w-16"
		/>
		<div class="flex-auto flex justify-between items-center">
			<h6 class="font-bold" data-toc-ignore>Satıcı: {seller?.shop_name || 'Çift Dikiş'}</h6>
			<small>{new Date(ad.created_at).toLocaleDateString('tr')}</small>
			<!-- <small>On {ad.created_at}</small> -->
		</div>
	</footer>
</a>
