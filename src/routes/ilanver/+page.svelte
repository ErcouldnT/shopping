<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { InputChip } from '@skeletonlabs/skeleton';

	import navigation from '../../settings/navigation.js';

	export let form;

	let comboboxValue: string;
	let colorValue: string;
	let list: string[] = ['sarı', 'yeşil', 'mavi'];

	// $: console.log(colorValue);

	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
</script>

<form on:submit|preventDefault class="container m-auto max-w-md p-5 space-y-5">
	<label class="label">
		<span>Ne satıyorsun?</span>
		<input
			name="name"
			value={form?.name ?? ''}
			class="input"
			type="text"
			placeholder="Çift Dikiş Pantolon"
		/>
	</label>
	<label class="label">
		<span>Ürün açıklaması</span>
		<textarea
			name="desc"
			value={form?.desc ?? ''}
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
		<input name="price" value={form?.price ?? ''} class="input" type="text" placeholder="55,99 ₺" />
	</label>

	<div class="grid grid-cols-[auto_1fr] gap-2">
		<input class="input" type="color" bind:value={colorValue} />
		<input class="input" type="text" bind:value={colorValue} readonly tabindex="-1" />
	</div>

	<InputChip bind:value={list} name="chips" placeholder="Renk yazınız..." />
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
