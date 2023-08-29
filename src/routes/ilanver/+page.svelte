<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import { enhance } from '$app/forms';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { InputChip } from '@skeletonlabs/skeleton';

	import navigation from '../../settings/navigation.js';
	import slugify from '../../utils/slugify.js';
	import { goto } from '$app/navigation';

	export let data;

	let comboboxValue: string;
	let colorValue: string;
	let list: string[] = ['sarı', 'yeşil', 'mavi'];
	let product_name: string;
	let product_desc: string;
	let price: string;

	// $: console.log(colorValue);

	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	async function publish() {
		const { error } = await data.supabase.from('ads').insert({
			product_name,
			product_desc,
			category: comboboxValue,
			price,
			colors: list,
			seller_id: data.session?.user.id,
			slug: slugify(product_name) // Önce database'i kontrol et zaten var mı?
		});

		if (!error?.message) {
			throw goto('/');
		}
		alert(error.message);
	}
</script>

<form on:submit|preventDefault class="container m-auto max-w-md p-5 space-y-5">
	<label class="label">
		<span>Ne satıyorsun?</span>
		<input
			name="name"
			bind:value={product_name}
			class="input"
			type="text"
			placeholder="Çift Dikiş Pantolon"
		/>
	</label>
	<label class="label">
		<span>Ürün açıklaması</span>
		<textarea
			name="desc"
			bind:value={product_desc}
			class="textarea"
			rows="5"
			placeholder="%100 pamuk"
		/>
	</label>

	<button class="btn variant-filled w-64 justify-between" use:popup={popupCombobox}>
		<span class="capitalize">{comboboxValue ?? 'Kategori seç'}</span>
		<span>↓</span>
	</button>

	<label class="label">
		<span>Fiyat</span>
		<input name="price" bind:value={price} class="input" type="text" placeholder="55,99 ₺" />
	</label>

	<div class="grid grid-cols-[auto_1fr] gap-2">
		<input class="input" type="color" bind:value={colorValue} />
		<input class="input" type="text" bind:value={colorValue} readonly tabindex="-1" />
	</div>

	<InputChip bind:value={list} name="chips" placeholder="Renk yazınız..." />

	<button on:click={publish} class="btn variant-filled-primary">İlanı paylaş</button>
</form>

<!-- Category Select Popup -->
<div class="card w-64 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		{#each navigation as category}
			<ListBoxItem bind:group={comboboxValue} name="medium" value={category}>{category}</ListBoxItem
			>
		{/each}
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
