<script lang="ts">
	export let data;

	const seller = data.seller;

	interface Message {
		from: string;
		text: string;
		to: string;
	}

	let text: string;
	let mesajlar: Message[] = [];

	const sendMessage = async () => {
		if (!text.trim()) return;

		const mesaj: Message = {
			text: text.trim(),
			from: data.session?.user.id || '',
			to: seller.seller_id
		};

		const { error } = await data.supabase.from('messages').insert(mesaj);

		if (error) return alert('Lütfen giriş yapınız.');

		mesajlar = [...mesajlar, mesaj];
		text = '';
	};

	const getMessages = async () => {
		const { data: messages, error } = await data.supabase
			.from('messages')
			.select()
			.eq('from', data.session?.user.id || '')
			.eq('to', seller.seller_id);

		// @ts-ignore
		mesajlar = [...messages];
	};

	getMessages();
</script>

<div class="container p-5 flex flex-col justify-center items-center gap-5">
	<h1>Mesajlarınız</h1>
	{#each mesajlar as mesaj}
		<p>{mesaj.text}</p>
	{/each}
	<form class="flex gap-2" on:submit|preventDefault>
		<label class="label">
			<input bind:value={text} class="input" type="text" placeholder="Bir mesaj yazın" />
		</label>
		<button on:click={sendMessage} class="btn variant-filled-primary">Mesaj gönder</button>
	</form>
</div>
