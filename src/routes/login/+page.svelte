<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
	export let data;
</script>

<pre>{form ? form.message : null}</pre>
<!-- <pre>{data.session ? data.session : null}</pre> -->

<form method="post" use:enhance class="container max-w-md m-auto p-5 space-y-5">
	<label class="label">
		<span>Email</span>
		<input
			name="email"
			value={form?.email ?? ''}
			class="input"
			type="text"
			placeholder="email@mail.com"
		/>
	</label>
	<label class="label">
		<span>Parola</span>
		<input name="password" class="input" type="password" placeholder="******" />
	</label>
	<div class="flex items-center space-x-5">
		<button class="btn variant-filled-primary">Giriş yap</button>
		<a href="/register" class="text-sm hover:underline">Kayıt olmak için tıklayın.</a>
	</div>
</form>
